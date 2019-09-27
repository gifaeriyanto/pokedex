import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'Elements';
import Evolutions from './evolutions';
import { ContentSection, BadgeTypes } from '../styled';

const Content = ({ detail }) => (
  <ContentSection>
    <h3>More Informations</h3>
    <div className="list">
      <div>
        <div>Max HP</div>
        <div>{ detail.maxHP }</div>
      </div>
      <div>
        <div>Max CP</div>
        <div>{ detail.maxCP }</div>
      </div>
      <div>
        <div>Weaknesses</div>
        <div className="weaknesses">
          {
            detail.weaknesses.map((item, index) => (
              <BadgeTypes key={index} type={item}>{ item }</BadgeTypes>
            ))
          }
        </div>
      </div>
      <div>
        <div>Resistant</div>
        <div className="weaknesses">
          {
            detail.resistant.map((item, index) => (
              <BadgeTypes key={index} type={item}>{ item }</BadgeTypes>
            ))
          }
        </div>
      </div>
    </div>

    {
      detail.evolutions && (
        <>
          <Evolutions evolutions={detail.evolutions} />
          <div className="evolutionRequirements">
            <Icon name="arrow_upward" />
            <div>Evolution Requirements</div>
            <div>{ `${detail.evolutionRequirements.name} (${detail.evolutionRequirements.amount})` }</div>
          </div>
        </>
      )
    }
  </ContentSection>
);

Content.propTypes = {
  detail: PropTypes.instanceOf(Object).isRequired,
};

export default Content;
