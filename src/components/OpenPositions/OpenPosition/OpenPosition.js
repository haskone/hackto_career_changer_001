import React, {useEffect, useState} from 'react';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import {useStyles} from './OpenPosition.styles';

const positionsMock = {
  1: {
    title: 'UX/UI Developer',
    sections: [
      {
        title: 'BASIC QUALIFICATIONS',
        descriptionList: [
          "Bachelor's degree in design, human-computer interaction (HCI), or equivalent professional experience as an interactive/user experience designer.",
        ]
      },
      {
        title: 'PREFERRED QUALIFICATIONS',
        description: [
          "All applicants must meet all qualifications listed above",
          "Benefits: Amazon provides a full range of benefits for our global employees and their eligible family members. This position is eligible for further pay increases and bonuses at the company's discretion. Eligible employees may also receive signing bonuses and Amazon Restricted Stock Units",
          "While they might vary from location to location, Amazon benefits for Canada may include: • Health Care • Savings Plans • Income Protection • Paid Time Off • Signing Bonuses • Employee Stock",
          "Amazon is an Equal Opportunity-Affirmative Action Employer – Minority / Female / Disability / Veteran / Gender Identity / Sexual Orientation",
          "Amazon is committed to providing employment accommodation in accordance with the Ontario Human Rights Code and the Accessibility for Ontarians with Disabilities Act. If you require accommodations, please notify us when/if you are selected for an interview."
        ]
      }
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
    <Typography variant='h5'>{title}</Typography>
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

export default function OpenPosition ({
  id,
  onSeeJourney
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
        See Journey
      </Button>
    </div>
  }

  return null;
};
