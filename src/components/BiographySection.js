import React from 'react'
import Heading from './Heading'
import Paragraph from './Paragraph'
import styled from "styled-components";

const BiographySectionWrapper = styled.div`
    padding: 1em;

`
const BiographySection = () => {
  return (
    <BiographySectionWrapper>
      <Heading>Biography</Heading>
      <Paragraph>
        Pianist Ryan Soeyadi is first prize winner of the 2018 Kosciuzko
        Foundation Chopin Competition in Washington D.C. and a sought-after
        pianist based in New York City. Ryan has appeared on stage in Alice
        Tully Hall at Lincoln Center for the Performing Arts, Steinway Hall in
        New York City, The Arkell Pavilion at The Southern Vermont Arts Center,
        Avram Theater in Southampton, NY, among other prestigious venues. Ryan
        was the grand prize winner of the 2020 and 2018 Music for Humanity
        scholarships, and has won top prizes at competitions such as the 2018
        Steinway and Sons Piano Competition in New York City, the Stony Brook
        International Piano Competition, and the Mieczyslaw Munz Competition at
        Juilliard.
      </Paragraph>
      <Paragraph>
        Most recently, Ryan received piano fellowships to the Manchester Music
        Festival, Pianofest in the Hamptons, and the Kneisel Hall Chamber Music
        Festival. Prior to attending these distinguished festivals, Ryan has
        attended the Stony Brook International Piano Festival over the course of
        five continuous summers, where he studied with Dr. Jose Ramon Mendez and
        Dr. Amy Gustafson. He has performed in masterclasses with world-class
        faculty such as Stephen Hough, Matti Raekallio, and Adam Neiman.
      </Paragraph>
      <Paragraph>
        Ryan is currently pursuing his Master of Music in Collaborative Piano at
        The Juilliard School on a full scholarship as a Jerome L. Greene fellow
        under the tutelage of Dr. Lydia Brown. Ryan graduated with a Bachelor of
        Music at The Juilliard School under the tutelage of Mr. Julian Martin in
        2021. Prior to his studies at The Juilliard School, Ryan attended the
        Manhattan School of Music Precollege Division under the tutelage of Dr.
        Adam Kent for seven years.
      </Paragraph>
    </BiographySectionWrapper>
  );
}

export default BiographySection