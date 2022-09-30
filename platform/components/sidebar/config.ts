import OverviewIcon from '../../../src/assets/icons/sidebar/overview.svg';
import CompaniesIcon from '../../../src/assets/icons/sidebar/companies.svg';
import PaymentsIcon from '../../../src/assets/icons/sidebar/payments.svg';
import AppointmentsIcon from '../../../src/assets/icons/sidebar/appointments.svg';
import ApplicationsIcon from '../../../src/assets/icons/sidebar/applications.svg';
import NotificationsIcon from '../../../src/assets/icons/sidebar/notifications.svg';
import SettingsIcon from '../../../src/assets/icons/sidebar/settings.svg';
import M from '../../../src/messages';
import { routes } from '../../../src/configs';

const links = [
  {
    id: 'overview',
    title: M.get('sidebar.overview'),
    link: routes.next.overview.path,
    icon: OverviewIcon,
  },
  {
    id: 'companies',
    title: M.get('sidebar.companies'),
    link: routes.next.companies.path,
    icon: CompaniesIcon,
  },
  {
    id: 'payments',
    title: M.get('sidebar.payments'),
    link: routes.next.payments.path,
    icon: PaymentsIcon,
  },
  {
    id: 'appointments',
    title: M.get('sidebar.appointments'),
    link: routes.next.appointments.path,
    icon: AppointmentsIcon,
  },
  {
    id: 'applications',
    title: M.get('sidebar.applications'),
    link: routes.next.applications.path,
    icon: ApplicationsIcon,
  },
  {
    id: 'divider-1',
    title: '',
    link: '',
    icon: '',
    type: 'divider'
  },
  {
    id: 'notifications',
    title: M.get('sidebar.notifications'),
    link: routes.next.notifications.path,
    icon: NotificationsIcon,
  },
  {
    id: 'settings',
    title: M.get('sidebar.settings'),
    link: routes.next.settings.path,
    icon: SettingsIcon,
  },

];

export { links };
