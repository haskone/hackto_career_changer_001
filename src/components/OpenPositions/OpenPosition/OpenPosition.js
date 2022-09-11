import React, { useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './OpenPosition.styles';

const mockStyles = {
  boldHighlight: {
    fontWeight: 'bold'
  },
  xp: {
    marginBottom: 12
  },
  listMargin: {
    marginTop: 8
  },
  link: {
    color: '#098afb'
  },
  boldLink: {
    color: '#098afb',
    fontWeight: 'bold'
  },
  purpleBoldHighlight: {
    color: '#3f51b5',
    fontWeight: 'bold'
  },
  noBulletDecoration: {
    visibility: 'hidden'
  }
};

const positionsMock = {
  1: {
    title: 'Software Engineer to UX/UI Developer Journey',
    sections: [
      {
        title: <Typography variant='h5'>Role Qualifications:</Typography>,
        descriptionList: [
          "3+ years of experience",
          "An available online portfolio",
          "Examples of shipped work across multiple platforms",
          "Understanding of HTML, Javascript and CSS that informs design and interaction decisions",
          "Experience designing e-commerce experiences; bonus points in designing for global markets",
        ]
      },
      {
        title: <Typography variant='body1' style={mockStyles.xp}>
          You currently have <span style={mockStyles.purpleBoldHighlight}>1/5</span> of the qualifications as a <span style={mockStyles.boldHighlight}>UX/UI Developer</span>
        </Typography>,
      },
      {
        title: <Typography variant='h5'>Resources available at Amazon to help you become a UX/UI Developer:</Typography>,
        descriptionList: [
          <div>
            Career training courses for UX/UI Developer
            <ul>
              <li><a style={mockStyles.link} href="https://www.udemy.com/course/user-experience-design-fundamentals/">Visual design principles</a></li>
              <li><a style={mockStyles.link} href="https://www.udemy.com/course/user-experience-design-fundamentals/">Using figma to create wireframes
              </a></li>
              <li><a style={mockStyles.link} href="https://www.udemy.com/course/user-experience-design-fundamentals/">Understand A/B testing processes</a></li>
            </ul>
          </div>,
          <div style={mockStyles.listMargin}>
            Amazon in-house mentors that have been through similar career transitions
            <ul>
              <li>Book a 15-minute mentor meeting with them for questions related to the roadmap</li>
            </ul>
          </div>
        ]
      },
      {
        description: [
          <Typography variant='h5'>UX/UI job openings at Amazon:</Typography>,
          <a style={mockStyles.boldLink} href="https://www.linkedin.com/jobs/view/3211649615/?alternateChannel=search&refId=RPsc%2FKruHqwXe1q%2BTYC9Dw%3D%3D&trackingId=qiOgwO0%2Bv0IKkdQSAgwp9Q%3D%3D&trk=d_flagship3_search_srp_jobs&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_jobs%3BNb8hTw5tTxekxDMbLwjTTg%3D%3D">UX Designer, New Advertising Product, Toronto, ON Canada</a>,
          <a style={mockStyles.boldLink} href="https://www.linkedin.com/jobs/view/3255198973/?alternateChannel=search&refId=RPsc%2FKruHqwXe1q%2BTYC9Dw%3D%3D&trackingId=dsfesHQl1RRuS3xovtW8tw%3D%3D&trk=d_flagship3_search_srp_jobs">Sr. UX Designer, PeopleInsight, PeopleInsight, Toronto, ON Canada</a>,
          <a style={mockStyles.boldLink} href="https://www.linkedin.com/jobs/view/3237677774/?alternateChannel=search&refId=RPsc%2FKruHqwXe1q%2BTYC9Dw%3D%3D&trackingId=lwJjHo4gkUEfyquAvcVE4g%3D%3D&trk=d_flagship3_search_srp_jobs">Senior UX Designer, Advertising Design Systems & Partner Experience</a>,
        ]
      },
    ]
  },
  2: {
    title: 'Project Manager',
    sections: [
      {
        title: 'BASIC QUALIFICATIONS',
        descriptionList: [
          "5+ years of experience in program or project management",
          "Experience using data and metrics to drive improvements",
          "Experience owning program strategy, end to end delivery, and communicating results to senior leadership"
        ]
      },
      {
        title: 'PREFERRED QUALIFICATIONS',
        descriptionList: [
          "A proven track record of developing highly-impactful, large-scale programs that deliver positive community impact",
          "Experience building community relationships",
          "Experience with budget management and driving results using metrics and analytics, providing a cadence of progress reports against annual goals",
          "Excellent written and verbal communication skills with the ability to present complex information in a clear and concise manner",
          "Desire to work with others and take on ambiguous tasks",
          "Experience working in a fast-paced environment similar to a high-tech start-up",
          "Exceptional organizational skills",
          "Strong professionalism and grace under pressure",
          "Strong interpersonal, written, and oral communication skills",
          "High EQ, maturity, and good judgment",
          "PMP highly desirable"
        ]
      }
    ]
  }
}

const Section = ({
  title,
  description,
  descriptionList
}) => {
  const classes = useStyles();

  return <div className={classes.sectionRoot}>
    {title}
    {
      description ?
        description.map((text, index) => {
          return <Typography
            className={classes.descriptionItem}
            key={index}>{text}</Typography>
        }) :
        null
    }
    {
      descriptionList ? <ul>
        {
          descriptionList.map((text, index) => <li key={index}>{text}</li>)
        }
      </ul> : null
    }
  </div>;
};

export default function OpenPosition({
  id,
  onSeeJourney,
  roadmapId,
}) {
  const classes = useStyles();

  const [position, setPosition] = useState(null);

  useEffect(() => {
    if (id) {
      setPosition(positionsMock[id]);
    }
  }, [id]);

  if (position) {
    return <div className={classes.root}>
      <Typography variant='h4' className={classes.positionTitle}>{position.title}</Typography>
      <Divider />
      <div className={classes.positionDescription}>
        {
          position.sections.map((section, index) => {
            return <Section key={index} {...section} />;
          })
        }
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={onSeeJourney}
        className={classes.seeJourneyButton}
      >
        {roadmapId ? 'Hide ' : 'See '} Journey
      </Button>
    </div>
  }

  return null;
};
