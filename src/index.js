import React, { useState } from 'react';
import timelines from './timelineItems';
import { computeItemDimensions, getRandomHexColor, getTimelineStartDate } from './utils';
import reactDom from 'react-dom/client';
import { assignLanes } from './assignLanes';
import { TimeLineContainer, TimeLinePageContainer } from './style';

const dayWidth = 50;
const minWidth = 150;
const laneHeight = 60;

function App() {

  const [timelineItems, setTimelineItems] = useState(assignLanes(timelines));

  const timelineStart = getTimelineStartDate(timelineItems);

  function handleDrag(itemId, laneIndex, deltaX) {
    const dayDelta = Math.round(deltaX / dayWidth);

    setTimelineItems(prev => {
      const updated = [...prev];

      const lane = updated[laneIndex].map(item => {
        if (item.id === itemId) {
          const newStart = new Date(item.start);
          newStart.setDate(newStart.getDate() + dayDelta);

          const newEnd = new Date(item.end);
          newEnd.setDate(newEnd.getDate() + dayDelta);

          return {
            ...item,
            start: newStart.toISOString().split("T")[0],
            end: newEnd.toISOString().split("T")[0],
          };
        }
        return item;
      });

      updated[laneIndex] = lane;
      return updated;
    });
  }

  const handleMouseDown = (e, itemId, laneIndex) => {
    const startX = e.clientX;

    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      if (Math.abs(deltaX) >= dayWidth) {
        handleDrag(itemId, laneIndex, deltaX);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div>
      <h2>Good luck with your assignment! {"\u2728"}</h2>
      <h3>{timelineItems.length} timeline items to render</h3>
      <TimeLinePageContainer>
        {timelineItems.map((lane, laneIndex) =>
          lane.map((item) => {
            const { left, width } = computeItemDimensions(
              item.start,
              item.end,
              timelineStart,
              dayWidth,
              minWidth
            );

            return (
              <TimeLineContainer
                key={item.id}
                width={width}
                left={left}
                top={(laneIndex * laneHeight) + 200}
                color={getRandomHexColor()}
                onMouseDown={(e) => handleMouseDown(e, item.id, laneIndex)}
              >
                {item.name}
              </TimeLineContainer>
            );
          })
        )}
      </TimeLinePageContainer>
    </div>
  );
};

const root = reactDom.createRoot(document.getElementById("root"));
root.render(<App />);