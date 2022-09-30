import AppointmentSection from '../appointmentSection';
import HomeSection from '../homeSection';
import HowItWorkSection from '../howItWorkSection';
import SurveySection from '../surveySection';
import M from './../../../../src/messages'

const sections = {
  scroll: [
    {
      to: 'home',
      label: `${M.get('navbar.home')}`,
      height: '728px',
      tabletHeight: '728px',
      mobileHeight: '728px',
      sectionComponent: HomeSection,
      position: 1,
      originalPosition: 1,
      type: 'scroll'
    },
    {
      to: 'howItWork',
      label: `${M.get('navbar.works')}`,
      height: '728px',
      tabletHeight: '728px',
      mobileHeight: '728px',
      sectionComponent: HowItWorkSection,
      position: 2,
      originalPosition: 2,
      type: 'scroll'
    },
    {
      to: 'survey',
      label: `${M.get('navbar.survey')}`,
      height: '550px',
      tabletHeight: '678px',
      mobileHeight: '678px',
      sectionComponent: SurveySection,
      position: 4,
      originalPosition: 3,
      type: 'scroll'
    },
    {
      to: 'appointment',
      label: `${M.get('navbar.appointment')}`,
      height: '728px',
      mobileHeight: '650px',
      tabletHeight: '600px',
      sectionComponent: AppointmentSection,
      position: 3,
      originalPosition: 4,
      type: 'scroll'
    },
  ],
  link: [
    {
      to: 'home',
      label: `${M.get('navbar.home')}`,
      height: '728px',
      tabletHeight: '728px',
      mobileHeight: '728px',
      sectionComponent: HomeSection,
      position: 1,
      originalPosition: 1,
      type: 'redirect'
    },
    {
      to: 'howItWork',
      label: `${M.get('navbar.works')}`,
      height: '728px',
      tabletHeight: '728px',
      mobileHeight: '728px',
      sectionComponent: HowItWorkSection,
      position: 2,
      originalPosition: 2,
      type: 'redirect'
    },
    {
      to: 'survey',
      label: `${M.get('navbar.survey')}`,
      height: '550px',
      tabletHeight: '678px',
      mobileHeight: '678px',
      sectionComponent: SurveySection,
      position: 4,
      originalPosition: 3,
      type: 'redirect'
    },
    {
      to: 'appointment',
      label: `${M.get('navbar.appointment')}`,
      height: '728px',
      mobileHeight: '650px',
      tabletHeight: '600px',
      sectionComponent: AppointmentSection,
      position: 3,
      originalPosition: 4,
      type: 'redirect'
    },
  ]
};

export { sections };
