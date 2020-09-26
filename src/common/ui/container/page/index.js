import { Page, Title } from './Page';
import { SectionWrapper } from './SectionWrapper';
import { SectionTitle } from './SectionTitle';

const GroupComponent = Page;
GroupComponent.Title = Title;
GroupComponent.SectionWrapper = SectionWrapper;
GroupComponent.SectionTitle = SectionTitle;

export { GroupComponent as Page };
