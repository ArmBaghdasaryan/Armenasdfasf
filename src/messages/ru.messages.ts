const ru = {
  languages: {
    english: 'English',
    arabic: 'Arabic'
  },

  navbar: {
    home: 'Home',
    works: 'How it works',
    survey: 'Survey',
    appointment: 'Appointment',
  },
  pages: {
    landing: {
      register: {
        title: {
          chapter_1: 'Be part',
          chapter_2: 'of Kuwait’s vision',
        },
        desc: 'KDIPA is one of the economic implementing arms of the country performting developmental, promotional, regulatory, and advocacy roles.',
        form: {
          investor: 'Investor',
          consulting: 'Consulting company',
          terms: 'Check here to indicate that you have read and agree to the Terms and Conditions',

          firstName: 'First name',
          lastName: 'Last name',
          email: 'Email',
          phone: 'Phone',
        }
      },
      login: {
        title: 'Welcome to',
        desc: 'KDipa',
        form: {
          title: 'Login to the system',
          username: 'Username',
          password: 'Password',
          newToKdipa: 'New to KDIPA?',
          register: 'Register',
        }
      },
      about: {
        title: 'About KDIPA',
        desc: {
          chapter_1: 'We make',
          chapter_2: 'Kuwait better',
        },
        investor:{
          title: 'Investors',
          desc: 'in the last year',
          number: '+31',
        },
        text:{
          chapter_1: 'Kuwait Direct Investment Promotion Authority (KDIPA) established in accordance with Law',
          chapter_2: 'No. 116 of 2013 regarding the promotion',
          chapter_3: 'of direct investment in the State of Kuwait, as a specialized public authority with financial and administrative independence. H.E. Foreign Minister is the Chairman of its Board of Directors.',
          chapter_4: 'The opportunities are here - and you can be a part of it',
          chapter_5: 'Find out how we can facilitate your investment journey.',
          chapter_6: 'H.E. Foreign Minister is the Chairman of its Board of Directors.',
        },
      },
      howItWork: {
        title: 'How it works?',
        desc: 'Easy to use device',
        register: 'Registration',
        tutorial: 'Tutorial',
        registerCard: {
          title: 'Registration',
          desc: 'You are inserting a form. You will receive an email with your username and password to continue',
        },
        loginCard: {
          title: 'Login details',
          desc: 'You are inserting a form. You will receive an email with your username and password to continue',
        },
        platformCard: {
          title: 'Platform login',
          desc: 'You are inserting a form. You will receive an email with your username and password to continue',
        },
      },
      appointment: {
        title: 'Book appointment',
        desc: 'Schedule your meeting',
        form: {
          title: 'Meeting details',
          mainInfo: 'Main  information',
          calendar: 'Calendar',
          selectDay: 'Select a day',
          selectTime: 'Select time',
          meetingType: 'Type purpose of the meeting',
          problemTypesOpt: {
            opt_1: 'Problem 1',
            opt_2: 'Problem 2'
          },
          meetingFormatOpt: {
            opt_1: 'Format 1',
            opt_2: 'Format 2'
          }
        },
      },
      survey: {
        title: 'Survey',
        desc: {
          chapter_1: 'Please',
          chapter_2: 'choose survey',
        },
        links: {
          survey: 'Consultant companies Satisfaction Survey',
          ossInvestor: 'OSS Investor Satisfaction Survey',
        }
      },
    }
  },

  actions: {
    support: 'Go to support',
    login: 'Login',
    register: 'Register',
    send: 'Send',
    next: 'Next',
  },

  errors: {
    required: '{field} field is required.',
    minChars: '{field} min length should be {count} character.',
    incorrectEmail: 'Incorrect email format.'
  },
};

// eslint-disable-next-line import/prefer-default-export
export { ru };
