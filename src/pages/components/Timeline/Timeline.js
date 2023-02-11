import { EmptyBlock, LineFragment, Wrapper } from './Timeline.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TimelineEvent from './TimelineEvent/TimelineEvent';

const Timeline = () => {
  return (
    <Wrapper>
      <TimelineEvent
        position='left'
        eventName='Vocational High School'
        text='IT Technician'
        dates='2012-2016'
        icon={<FontAwesomeIcon icon='fa-solid fa-school' />}
      />
      <LineFragment position={'first'} />
      <EmptyBlock />
      <TimelineEvent
        long={true}
        position='left'
        eventName='Mayeryn'
        text='Frontend Developer'
        dates='December 2019 - June 2022'
        icon={<FontAwesomeIcon icon='fa-solid fa-briefcase' />}
      />
      <LineFragment />
      <TimelineEvent
        eventName='Pedagogical University of Krakow'
        text='Computer Science'
        dates='2017 - 2021'
        icon={<FontAwesomeIcon icon='fa-solid fa-graduation-cap' />}
      />
      <EmptyBlock />
      <LineFragment position={'last'} />
      <TimelineEvent
        eventName='SII Poland'
        text='Software Engineer'
        dates='September 2022 - now'
        icon={<FontAwesomeIcon icon='fa-solid fa-briefcase' />}
      />
    </Wrapper>
  );
};

export default Timeline;
