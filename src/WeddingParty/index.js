import React from 'react';
import Fade from 'react-reveal/Fade';
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
  <div>
    <h4 className="wedding-party__member-name">{name}</h4>
    <span className="wedding-party__member-role">{type}</span>
  </div>
);

const WeddingParty = () => (
  <SectionWrapper className="wedding-party">
    <ReadingWell>
      <SectionTitle title="wedding party" />
      <div className="wedding-party__couple-wrapper">
        <div className="wedding-party__column">
          <Fade left>
            <Spouse
              firstName="tiffany joy"
              lastName="indrawan"
              image="https://source.unsplash.com/1600x900/?nature,water"
              type="bride"
              isChangingLastName
            />
          </Fade>
          <Fade bottom cascade>
            <ul className="wedding-party__bridal-party">
              {/* <li> wrapper around BridalPartyMember to get the Fade to work properly */}
              <li className="wedding-party__member">
                <BridalPartyMember
                  name="Christina Ma"
                  type="Matron of Honor"
                />
              </li>
              <li className="wedding-party__member">
                <BridalPartyMember
                  name="Jessica Lee"
                  type="Bridesmaid"
                />
              </li>
              <li className="wedding-party__member">
                <BridalPartyMember
                  name="Kirstie Lo"
                  type="Bridesmaid"
                />
              </li>
              <li className="wedding-party__member">
                <BridalPartyMember
                  name="Hannah Lee"
                  type="Bridesmaid"
                />
              </li>
              <li className="wedding-party__member">
                <BridalPartyMember
                  name="Michelle Lo"
                  type="Bridesmaid"
                />
              </li>
              <li className="wedding-party__member">
                <BridalPartyMember
                  name="Emily Takei"
                  type="Bridesmaid"
                />
              </li>
            </ul>
          </Fade>
        </div>
        <div className="wedding-party__column">
          <Fade right>
            <Spouse
              firstName="christopher kam"
              lastName="hui"
              image="https://source.unsplash.com/1600x900/?nature,water"
              type="groom"
            />
          </Fade>
          <Fade bottom cascade>
              <ul className="wedding-party__bridal-party">
                {/* <li> wrapper around BridalPartyMember to get the Fade to work properly */}
                <li className="wedding-party__member">
                  <BridalPartyMember
                    name="Elmer Indrawan"
                    type="Groomsman"
                  />
                </li>
                <li className="wedding-party__member">
                  <BridalPartyMember
                    name="Anthony Hui"
                    type="Groomsman"
                  />
                </li>
                <li className="wedding-party__member">
                  <BridalPartyMember
                    name="Ben Khong"
                    type="Groomsman"
                  />
                </li>
                <li className="wedding-party__member">
                  <BridalPartyMember
                    name="Gabe Yeung"
                    type="Groomsman"
                  />
                </li>
                <li className="wedding-party__member">
                  <BridalPartyMember
                    name="Francis Chow"
                    type="Groomsman"
                  />
                </li>
                <li className="wedding-party__member">
                  <BridalPartyMember
                    name="Felix Tsoi"
                    type="Groomsman"
                  />
                </li>
              </ul>
          </Fade>          
        </div>
      </div>
    </ReadingWell>
  </SectionWrapper>
);

export default WeddingParty;
