import React from 'react';
import PropTypes from 'prop-types';

import { gql, graphql } from 'react-apollo';

import EventHero from './EventHero';
import EventList from './EventList';
import { CardListContainer, SectionTitle } from './EventStyles';

const Events = ({ data }) => {
  console.log(data);
  const allEvents = data.allEvents;
  if (data.networkStatus < 7) {
    return (
      <div>
        <EventHero />
        <CardListContainer>
          <SectionTitle>Loading ...</SectionTitle>
        </CardListContainer>
      </div>
    );
  }

  return (
    <div>
      <EventHero />
      <CardListContainer>
        <SectionTitle>Explore</SectionTitle>
        <EventList events={allEvents} />
      </CardListContainer>
    </div>);
};

Events.propTypes = {
  data: PropTypes.object.isRequired
};

export default graphql(gql`
  query AllEventsQuery {
    allEvents (orderBy: createdAt_DESC){
      id,
      title,
      startDate,
      endDate,
      image,
      description,
      questionsToAsk {
        id,
        phrase,
        questionType {
          title
        },
        answers {
          responseBoolean,
          responseShortText,
          user {
            id,
            name
          }
        }
      },
      owner {
        id,
        name
      },
      participants {
        id,
        name,
        avatar
      }
    }
  }
`)(Events);
