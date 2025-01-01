import React, { Children, isValidElement, ReactElement, useState } from 'react';
import { Tab, TabProps } from './Tab';
import { Select } from '@renderer/components/Form/Select';

interface TabsProps {
  children: React.ReactNode;
  defaultTab?: number;
}

export function Tabs({ children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = Children.toArray(children)
    .filter((child): child is ReactElement<TabProps> => isValidElement(child) && child.type === Tab)
    .map((child) => ({
      label: child.props.label,
      content: child.props.children,
    }));
  if (tabs.length !== Children.count(children)) {
    throw new Error('Tabs component only accepts Tab components as children');
  }

  return (
    <div className="w-full">
      <Select options={tabs.map((tab) => tab.label)} setSelectedOption={setActiveTab} />
      <div className="py-4">{tabs[activeTab]?.content}</div>
    </div>
  );
}
