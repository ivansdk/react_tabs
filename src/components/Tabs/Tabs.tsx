import cn from "classnames";

import { TabType } from "../../TabType";

type Props = {
  tabs: TabType[];
  selectedTabId: string;
  onTabSelected: (tab: TabType) => void;
  currentTab: TabType;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
  currentTab,
}) => {

  
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={cn({
                'is-active': currentTab.id === tab.id
              })}
              data-cy="Tab"
              onClick={() => {
                if (selectedTabId !== tab.id) {
                    onTabSelected(tab);
                }
              }}
            >
              <a href={`#${tab.id}`} data-cy="TabLink">
                {tab?.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab?.content}
      </div>
    </div>
  );
};
