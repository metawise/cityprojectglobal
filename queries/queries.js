import { gql } from '@apollo/client'
import { SEO_FRAGMENT } from './fragments'

export const HOME_PAGE_QUERY = gql`
  query {
    page(id: "cG9zdDoxNg==") {
      seoMetaFields {
        ...SeoMetaFields
      }
      homeExtraBanner {
        homeBannerSecond {
          homeBannerBackgroundImage {
            node {
              link
            }
          }
          homeBannerButtonLink
          homeBannerButtonText
          homeBannerDescription
          homeBannerHeadings
          homeBannerLatestPostImages {
            node {
              link
            }
          }
          homeBannerSubtitle
        }
      }
      title
      link
      bannerHome {
        banner {
          node {
            link
          }
        }
        textBanner
        textBanner2
        textBanner3
        subtitleupper
        buttonText
        buttonLinkBannerHome
        subtitle_bottom
      }
      bannerHomesecond {
        rightsmallsectionlink
        rightsmallsectiontext
        rightsmallsectionlinktext
        heading_second_section
        buttonLinkSecondSection
        buttonText
        subtitleText
        firstRightImage {
          node {
            link
          }
        }
        secondRightImage {
          node {
            link
          }
        }
        bannersecondbackground {
          node {
            link
          }
        }
      }
      sectionHomethird {
        firstcolumnimage {
          node {
            link
          }
        }
        buttonLink1ThirdSection
        buttonLink2ThirdSection
        buttonLink3ThirdSection
        firstcolumnheading
        subtitletextfirst
        buttontxtfirst
        secondcolumnimage {
          node {
            link
          }
        }
        secondcolumnheading
        subtitletextsecond
        buttontxtsecond
        thirdcolumnimage {
          node {
            link
          }
        }
        thirdcolumnheading
        subtitletextthird
        buttontxtthird
      }
      homefourtsection {
        mainheadingfourth
        firstimage {
          node {
            link
          }
        }
        firstsubtitle1
        firstheading
        firstparagraph
        secondimage {
          node {
            link
          }
        }
        secondheading
        secondsubtitle
        secondparagraph
        thirdimage {
          node {
            link
          }
        }
        thirdsubtitle
        thirdheading
        thirdparagraph
      }
      homefifthsection {
        mainheadingfifth
        fifthheadingsimple
        buttonlinkone
        buttonlinksecond
        fifthfirstimage {
          node {
            link
          }
        }
        fifthfirstsubtitle
        fifthbuttonone
        textbuttonsecond
        authorimage {
          node {
            link
          }
        }
        authortitle
        authordesignation
      }
      patnerssection {
        linknithbox
        mainheading
        firstsubtitlepatner
        imagefirst {
          node {
            link
          }
        }
        image5 {
          node {
            link
          }
        }
        image2 {
          node {
            link
          }
        }
        image3 {
          node {
            link
          }
        }
        image4 {
          node {
            link
          }
        }
        image6 {
          node {
            link
          }
        }
        image7 {
          node {
            link
          }
        }
        image8 {
          node {
            link
          }
        }
        textninthbox
        linktextninthbox
      }
      homesixthsection {
        heading
        paragraph
        author
        designations
        rightimage {
          node {
            link
          }
        }
      }
    }
  }
  ${SEO_FRAGMENT}
`

export const ABOUT_US_PAGE_QUERY = gql`
  query {
    page(id: "cG9zdDoyNjY=") {
      seoMetaFields {
        ...SeoMetaFields
      }
      aboutuspage {
        mainheadingabout
        secondimage {
          node {
            link
          }
        }
        secondsectionheading_1
        secondsectionheading_2

        secondsectionrightimage {
          node {
            link
          }
        }
        secondsectionimagwithtext_image {
          node {
            link
          }
        }
        secondsectionimagwithtextText
        secondsectionimagwithtextSubtext
        secondsectionimagwithtextButtontext
        secondsectionimagwithtextButtonlink
        thirdsectionimage {
          node {
            link
          }
        }
        forthsectionlefttext
        fourthsectionleftbutton
        fourthsectionleftbuttonlink
        fourthsectionrightheading
        fourthsectionrightdescrition1
        fourthsectionrightdescrition2
        fourthsectionrightdescrition3
        fourthsectionrightdescrition4
      }

      aboutussections {
        iconsections {
          logoIcons {
            node {
              link
            }
          }
          icontitle
        }
        videosectionheading
        videosectionbackground {
          node {
            link
          }
        }
        videosectiontitle
        videosectiondescription
        imagewithtextImage1 {
          node {
            link
          }
        }
        imagewithtextImage1 {
          node {
            link
          }
        }
        imagewithtext1Description1
        imagewithtext1description2
        imagewithtext1description3
        imagewithtext1description4
        imagewithtext1description5
        imagewithtext1Heading
        imagewithtextImage2 {
          node {
            link
          }
        }
        imagewithtext2Description1
        imagewithtext2Description2
        imagewithtext2Description3
        imagewithtext2Description4
        imagewithtext2Description5
        imagewithtext2Heading
        reviewsectiontitle1
        reviewsectiondescription1
        tenthsectionleftheading
        tenthsectionrightimage {
          node {
            link
          }
        }
        tenthsectionleftsubheading
        tenthsectionleftbuttontext
        tenthsectionleftbuttonlink
        eleventhsectionheading
        eleventhsectionsubheading
        eleventhsectiondescrition
        eleventhsection2descrition
        eleventhsection2heading
        twelthsectionleftimage {
          node {
            link
          }
        }
        twelthsectionrightimage {
          node {
            link
          }
        }
        twelthsectionrightdescription
        twelthsectionrightdescription2
        tenthsectionrightcolumns {
          columnsimage {
            node {
              link
            }
          }
          columnstext
        }
      }
    }
  }
  ${SEO_FRAGMENT}
`

export const BOOK_PAGE_QUERY = gql`
  query Book {
    page(id: "cG9zdDo0MzM=") {
      bookPageFeilds {
        bookFifthReviewSectionDescription
        bookFifthReviewSectionHeading
        bookFirstSectionMainHeading
        bookFourthSectionFirstColumnText
        bookSeventhSectionButtonOneLink
        bookSeventhSectionButtonTwoLink
        bookSeventhSectionButtonOneText
        bookSeventhSectionButtonTwoText
        bookSeventhSectionDescription1
        bookSeventhSectionDescription2
        bookSeventhSectionDescription3
        bookSeventhSectionDescription4
        bookSeventhSectionMainHeading
        bookSixthSectionVideoDescription
        bookSixthSectionVideoHeading
        bookSixthSectionVideoLink
        bookSixthSectionVideoMainHeading
        bookThirdSectionRightButtonOne
        bookThirdSectionRightButtonTwo
        bookThirdSectionRightButtonTwoLink
        bookThirdSectionRightDescription
        bookThirdSectionRightHeading
        bookThirdSectionRightButtonOneLink {
          url
        }
        bookThirdSectionLeftImage {
          node {
            link
          }
        }

        bookSecondSectionImage {
          node {
            link
          }
        }
        bookFourthSectionThirdColumnImage {
          node {
            link
          }
        }
        bookFourthSectionSecondColumnImage {
          node {
            link
          }
        }
        bookFourthSectionFourthColumnImage {
          node {
            link
          }
        }
        bookNinthSectionMainLeftHeading
        bookNinthSectionMainRightDescription
        bookNinthSectionRightFirstColumnText
        bookNinthSectionRightSecondColumnButtonLink
        bookNinthSectionRightSecondColumnText
        bookNinthSectionRightImage {
          node {
            link
          }
        }
        bookNinthSectionLeftImage {
          node {
            link
          }
        }
        bookEigthSectionMainHeading
        bookEigthSectionMainLeftDescription
        bookEigthSectionMainRightDescription1
        bookEigthSectionMainRightDescription2
        bookNinthSectionRightSecondColumnButtonText
        bookEigthSectionMainLeftImage {
          node {
            link
          }
        }
        bookEigthSectionMainRightImage {
          node {
            link
          }
        }
      }
    }
  }
`

export const LEADERSHIP_PAGE_QUERY = gql`
  query MyQuery2 {
    page(id: "cG9zdDo2MDg=") {
      leadershipPageFeilds {
        leadershipEightSectionFields {
          leadershipEightSectionFirstRowFirstColumnDescription
          leadershipEightSectionFirstRowFirstColumnHeading
          leadershipEightSectionFirstRowSecondColumnImage {
            node {
              link
            }
          }
          leadershipEightSectionFirstRowThirdDescription
          leadershipEightSectionFirstRowThirdHeading
          leadershipEightSectionMainDescription
          leadershipEightSectionMainHeading
          leadershipEightSectionSecondRowFirstImage {
            node {
              link
            }
          }
          leadershipEightSectionSecondRowSecondDescription
          leadershipEightSectionSecondRowSecondHeading
          leadershipEightSectionSecondRowThirdImage {
            node {
              link
            }
          }
        }
        leadershipEleventhSection {
          leadershipEleventhSectionFirstSection {
            leadershipEleventhFirstText
            leadershipEleventhFirstImage {
              node {
                link
              }
            }
          }
          leadershipEleventhSectionMainHeading
          leadershipEleventhSectionSecondButtonLink
          leadershipEleventhSectionSecondButtonText
          leadershipEleventhSectionSecondDescription
          leadershipEleventhSectionSecondImage {
            node {
              link
            }
          }
        }
        leadershipFifthSectionFields {
          leadershipFifthSectionFirstColumnDescription
          leadershipFifthSectionFirstColumnHeading
          leadershipFifthSectionFirstColumnImages {
            node {
              link
            }
          }
          leadershipFifthSectionSecondColumnDescription1
          leadershipFifthSectionSecondColumnDescription2
          leadershipFifthSectionSecondColumnDescription3
          leadershipFifthSectionSecondColumnDescriptionHeading1
          leadershipFifthSectionSecondColumnDescriptionHeading2
          leadershipFifthSectionSecondColumnDescriptionHeading3
          leadershipFifthSectionSecondColumnMainHeading
          leadershipFifthSectionThirdColumnImage {
            node {
              link
            }
          }
        }
        leadershipFirstSectionFeilds {
          leadershipFirstSectionSecondColumnDescription1
          leadershipFirstSectionSecondColumnDescription2
          leadershipFirstSectionSecondColumnHeading
          leadershipFirstSectionFirstColumnImage {
            node {
              link
            }
          }
          leadershipFirstSectionThirdColumnImage {
            node {
              link
            }
          }
        }
        leadershipFourthSectionFields {
          leadershipFourthSectionFirstColumnImage {
            node {
              link
            }
          }
          leadershipFourthSectionMainHeading
          leadershipFourthSectionSecondColumnDescription1
          leadershipFourthSectionSecondColumnDescription2
          leadershipFourthSectionThirdColumnDescription1
          leadershipFourthSectionThirdColumnDescription2
        }
        leadershipMainHeading
        leadershipNinthSection {
          leadershipNinthSectionFirstColumnImage {
            node {
              link
            }
          }
          leadershipNinthSectionMainHeading
          leadershipNinthSectionSecondColumnText
          leadershipNinthSectionThirdColumnImage {
            node {
              link
            }
          }
        }
        leadershipSecondSectionFields {
          leadershipSecondSectionFirstColumnButtonLink
          leadershipSecondSectionFirstColumnButtonText
          leadershipSecondSectionFirstColumnDescription
          leadershipSecondSectionFirstColumnHeading
          leadershipSecondSectionSecondColumnBackgroundImage {
            node {
              link
            }
          }
          leadershipSecondSectionSecondColumnBox {
            leadershipSecondSectionSecondColumnBoxButtonLink
            leadershipSecondSectionSecondColumnBoxButtonText
            leadershipSecondSectionSecondColumnBoxDescription
            leadershipSecondSectionSecondColumnBoxHeading
          }
        }
        leadershipSeventhSectionFields {
          leadershipSeventhSectionButtonLink
          leadershipSeventhSectionButtonText
          leadershipSeventhSectionDescription
          leadershipSeventhSectionMainHeading
          leadershipSeventhSectionMainImage {
            node {
              link
            }
          }
          leadershipSeventhSectionSubheading
        }
        leadershipSixthSectionFields {
          leadershipSixthSectionFirstRowFirstColumnImage {
            node {
              link
            }
          }
          leadershipSixthSectionFirstRowSecondColumnDescription
          leadershipSixthSectionFirstRowSecondColumnHeading
          leadershipSixthSectionMainDescription
          leadershipSixthSectionMainHeading
          leadershipSixthSectionSecondRowSecondColumnDescription
          leadershipSixthSectionSecondRowFirstColumnImage {
            node {
              link
            }
          }
          leadershipSixthSectionSecondRowSecondColumnHeading
          leadershipSixthSectionSecondRowThirdColumnImages {
            node {
              link
            }
          }
          leadershipSixthSectionThirdRowFirstColumnImages {
            node {
              link
            }
          }
          leadershipSixthSectionThirdRowSecondsColumnDescription
          leadershipSixthSectionThirdRowSecondsColumnHeading
        }
        leadershipTenthSection {
          leadershipTenthSectionFirstColumnText
          leadershipTenthSectionSecondColumnDescription1
          leadershipTenthSectionSecondColumnDescription2
          leadershipTenthSectionSecondColumnDescription3
          leadershipTenthSectionSecondColumnDescriptionGreenColor
          leadershipTenthSectionSecondColumnHeading
        }
        leadershipThirdSectionFields {
          leadershipThirdSectionBox {
            leadershipThirdSectionBoxDescription
            leadershipThirdSectionBoxHeading
            leadershipThirdSectionBoxImages {
              node {
                link
              }
            }
          }
          leadershipThirdSectionMainHeading
        }
        leadershipThirteenSection {
          leadershipThirteenSectionButtonLink
          leadershipThirteenSectionButtonText
          leadershipThirteenSectionHeading
        }
        leadershipTwelfthSection {
          leadershipTwelfthSectionFirstRowFirstColumn
          leadershipTwelfthSectionFirstRowSecondColumnDescription
          leadershipTwelfthSectionMainHeading
          leadershipTwelfthSectionSecondRowFirstColumnDescription
          leadershipTwelfthSectionSecondRowFirstColumnHeading
          leadershipTwelfthSectionSecondRowSecondColumnImage1 {
            node {
              link
            }
          }
          leadershipTwelfthSectionSecondRowSecondColumnImage2 {
            node {
              link
            }
          }
        }
        leadershipVideoSection {
          leadershipVideoSectionMainHeading
          leadershipVideoSectionBackgroundImage {
            node {
              link
            }
          }
          leadershipVideoSectionDescripiton
          leadershipVideoSectionHeading
          leadershipVideoSectionTopImage {
            node {
              link
            }
          }
        }
        vantageFormThirdSection {
          vantageFormThirdSectionImage1 {
            node {
              link
            }
          }
          vantageFormThirdSectionImage2 {
            node {
              link
            }
          }
          vantageFormThirdSectionImage3 {
            node {
              link
            }
          }
          vantageFormThirdSectionImage4 {
            node {
              link
            }
          }
          vantageFormThirdSectionImage5 {
            node {
              link
            }
          }
        }
      }
    }
  }
`
