import { AppBaseWrapper } from '@/modules/app/ui/components/base';
import { AppLayoutAuthentication, AppLayoutDefault, AppLayoutEmpty } from '@/modules/app/ui/components/layouts';

/**
 * Global components
 * @param app
 */
const BaseComponentRegister = app => {
  /**
   * Base Components
   * To make a components can access without import please put in below
   */
  app.component('AppBaseWrapper', AppBaseWrapper);

  /**
   * Base Layouts
   */
  app.component('EmptyLayout', AppLayoutEmpty);
  app.component('DefaultLayout', AppLayoutDefault);
  app.component('AuthenticationLayout', AppLayoutAuthentication);
};

export default BaseComponentRegister;
