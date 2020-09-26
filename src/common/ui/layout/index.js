import Layout from './Layout';
import Sidebar from './Sidebar';
import SettingPanel from './SettingPanel';
import TopNavbar from './TopNavbar';

const GroupComponent = Layout;
GroupComponent.Sidebar = Sidebar;
GroupComponent.SettingPanel = SettingPanel;
GroupComponent.TopNavbar = TopNavbar;

export { GroupComponent as Layout };
