import React from 'react';
import SectionWrapper from './../SectionWrapper';
import ReadingWell from './../ReadingWell';
import SectionTitle from './../SectionTitle';
import './styles.css';

const Spouse = ({
  className = '',
  firstName,
  lastName,
  image,
  type,
  isChangingLastName
}) => (
  <div className={['wedding-party__spouse', className].join(' ').trim()}>
    <div
      className="wedding-party__spouse-image"
      style={{ backgroundImage: `url('${image}')` }}
    />
    <h3 className="wedding-party__spouse-name">
      <span className="wedding-party__spouse-first-name">{firstName}</span>&nbsp;
      <span className={`wedding-party__spouse-last-name ${isChangingLastName && 'strikethrough'}`.trim()}>{lastName}</span>
    </h3>
    <h4 className="wedding-party__role">{type}</h4>
  </div>
);

const BridalPartyMember = ({ name, type }) => (
  <li className="wedding-party__member">
    <h4 className="wedding-party__member-name">{name}</h4>
    <span className="wedding-party__member-role">{type}</span>
  </li>
);

const WeddingParty = () => (
  <SectionWrapper className="wedding-party">
    <ReadingWell>
      <SectionTitle title="wedding party" />
      <div className="wedding-party__couple-wrapper">
        <div className="wedding-party__column">
          <Spouse
            firstName="tiffany joy"
            lastName="indrawan"
            image="https://source.unsplash.com/1600x900/?nature,water"
            type="bride"
            isChangingLastName
          />
          <ul className="wedding-party__bridal-party">
            <BridalPartyMember
              name="Christina Ma"
              type="Maid of Honor"
            />
            <BridalPartyMember
              name="Jessica Lee"
              type="Bridesmaid"
            />
            <BridalPartyMember
              name="Kirstie Lo"
              type="Bridesmaid"
            />
            <BridalPartyMember
              name="Hannah Lee"
              type="Bridesmaid"
            />
            <BridalPartyMember
              name="Michelle Lo"
              type="Bridesmaid"
            />
            <BridalPartyMember
              name="Emily Takei"
              type="Bridesmaid"
            />
          </ul>
        </div>
        <div className="wedding-party__column">
          <Spouse
            firstName="christopher kam"
            lastName="hui"
            image="https://source.unsplash.com/1600x900/?nature,water"
            type="groom"
          />
          <ul className="wedding-party__bridal-party">
            <BridalPartyMember
              name="Elmer Indrawan"
              type="Groomsman"
            />
            <BridalPartyMember
              name="Anthony Hui"
              type="Groomsman"
            />
            <BridalPartyMember
              name="Ben Khong"
              type="Groomsman"
            />
            <BridalPartyMember
              name="Gabe Yeung"
              type="Groomsman"
            />
            <BridalPartyMember
              name="Francis Chow"
              type="Groomsman"
            />
            <BridalPartyMember
              name="Felix Tsoi"
              type="Groomsman"
            />
          </ul>
        </div>
      </div>
    </ReadingWell>
  </SectionWrapper>
);

export default WeddingParty;
