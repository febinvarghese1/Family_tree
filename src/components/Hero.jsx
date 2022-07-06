import React from "react";
import styledComponent from "styled-components";
import { device } from "../device";
import { data } from "../Data";
import bg from "../nature-8597.png";
const Hero = () => {
  return (
    <Container>
      <ContentContainer>
        <TextContainer>
          <Text>Thekkethil Family</Text>
        </TextContainer>
        <Image src={bg} alt="" />
      </ContentContainer>
      <HistoryContainer>
        <HistoryHeading>Family History</HistoryHeading>
        <HistoryContentContainer>
          <HistoryContent>{data.p1content}</HistoryContent>
          <HistoryContent>{data.p2content}</HistoryContent>
          <HistoryContent>
            <h4>Thekkethil Family – Generation 1-9</h4>
            <HistoryList>
              <HistoryListItems>
                1. Our Patriarch: Chirakadavil Mathan
              </HistoryListItems>
              <HistoryListItems>
                <b>2 .</b> Thekkel Mathan Itty: Married from Thalayanadu and
                blessed with three sons and one daughter
                <br /> 2.1 Itty Mathan (Thekkel Mathan) <br /> 2.2 Itty
                Kunjummen (Memuriyil Kunjummen) <br /> 2.3 Itty Itty (Thundiyil
                Itty) <br />
                2.4 The daughter was given in marriage to Palliyath House,
                Kozhencherry
              </HistoryListItems>
              <HistoryListItems>
                <b>3 .</b> Itty Mathan (Thekkel Mathan): Married from
                Thekkekara, Omalloor. They had one son and two daughters.
                <br /> 3.1 Â Mathan Itty . Mathan Itty: Married from
                Vadakkeveettil, Pathanamthitta. He stayed at Thekkel, Elanthoor;
                blessed with one son and one daughter.
              </HistoryListItems>
              <HistoryListItems>
                <b>4 .</b> Itty Mathan <br />
                4.1 Mariamma
              </HistoryListItems>
              <HistoryListItems>
                <b>5.</b> Itty Mathan: After formal education, married from
                Pallicka Veettil, Kaipattoor and stayed at family home at
                Elanthoor. They were blessed with four sons and three daughters.
                He was a well known person in Elanthoor.
                <br /> 5.1 Itty <br />
                5.2 Mathai <br /> 5.3 Kunjummen
              </HistoryListItems>
            </HistoryList>
          </HistoryContent>
        </HistoryContentContainer>
      </HistoryContainer>
    </Container>
  );
};

const Container = styledComponent.div`
display:flex;
flex-direction:column;
justify-content:space-between;

`;
const TextContainer = styledComponent.div`
text-align:center;
margin-top:20vh;
z-index:-2000;
font-family:var(--primary-font)`;

const Image = styledComponent.img`position:absolute;
height:100vh;
width:100vw;
z-index:-100;
top:0;
right:0;
  @media (${device.mobileL}){
    object-fit:cover;
  }

`;


const ContentContainer = styledComponent.div`position:relative;
height:100vh;
position:relative;`;

const Text = styledComponent.h1`font-size:7rem;
text-shadow: 2px 2px 4px #00fbff;
z-index:100;
  @media ${device.mobileL}{
    font-size: 4rem;
    text-align:center;
  }
`;

const HistoryContainer = styledComponent.div`
display:flex;
align-items:center;
flex-direction:column;
background:lightblue;`;

const HistoryHeading = styledComponent.h1`
font-family:var(--secondary-font);
font-weight:200;
padding:5px;
`;
const HistoryContentContainer = styledComponent.div` padding:5px;`;
const HistoryContent = styledComponent.div`font-size:1.40rem;
padding:2px;
font-weight:500;
margin-top:1.5rem;
font-family:var(--para-font);
`;

const HistoryList = styledComponent.ul``;
const HistoryListItems = styledComponent.li`margin-top:8px;`;

export default Hero;
