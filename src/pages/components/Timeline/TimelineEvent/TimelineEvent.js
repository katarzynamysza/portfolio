import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import {
  Wrapper,
  EventName,
  EventDetails,
  IconWrap,
  CardWrapper,
  Line,
  EventMoreInfo,
} from './TimelineEvent.css';

const TimelineEvent = ({
  position = 'right',
  eventName,
  text,
  dates,
  long = false,
  icon,
}) => {
  const [toggled, setToggled] = useState(false);

  const handleToggleCard = () => {
    setToggled(prev => !prev);
    console.log(toggled);
  };

  return (
    <Wrapper position={position} long={long} toggled={toggled}>
      {position === 'right' && (
        <>
          <IconWrap>{icon}</IconWrap>
          <Line />
        </>
      )}
      <CardWrapper
        long={long}
        onClick={() => handleToggleCard()}
        toggled={toggled}>
        <EventName>{eventName}</EventName>
        <EventDetails>
          {text}
          <FontAwesomeIcon icon={faCircle} size={'2xs'} />
          {dates}
        </EventDetails>

        <EventMoreInfo toggled={toggled}>
          test test test test test test test test test test test test test test
          test test test test test test test test test test test test test test
          test test test test test test test test test test test test test test
          test test test test test test test test test test test test test test
          test test test test test test test test test test test test test test
          test test test test test test test test test test test test test test
          test test test test test test test test test test test test test test
          test test test test test test test test test test test test test test
          test test test test test test test test test test test test test test
          test test test test test test test test test test test test test test
          test test test test test test test test test test test test test test
          test test test test test test test test test test test test test test
          test test test test test test test test test test test test test test
          test test test test test test test test test test test test test test
          test test test test test test test test test test test test test test
          test test test test test test test test test test test test test test
          test test test test test test test test test test test test test test
          test test test test test test test test test test test test test test
          test test test test test test test test test test test test test test
          test test test test test test test test test test test test test test
          test test test test test test test test test test test test test test
          test test test test test test test test test test test test test test
          test test test test test test test test test test test test test test
          test test test test test test test test test test test test test test
          test test test test test test test test test test test test test test
          test test test test test test test test test test test test test test
          test test test test test test test test test test test test test test
          test test test test test test test test test test test test test test
          test test test test test test test test test test test test test test
          test test test test test test test test test test test test test test
          test test test test test test test test test test test test test test
          test test test test test test test test test test test test test test
          test test test test test test test test test test test test test test
          test test test test test test
        </EventMoreInfo>
      </CardWrapper>
      {position === 'left' && (
        <>
          <Line />
          <IconWrap>{icon}</IconWrap>
        </>
      )}
    </Wrapper>
  );
};

export default TimelineEvent;
