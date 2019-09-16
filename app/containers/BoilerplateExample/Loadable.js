/**
 *
 * Asynchronously loads the component for BoilerplateExample
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
