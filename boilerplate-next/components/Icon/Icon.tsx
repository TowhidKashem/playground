import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import {
  faCircleExclamation,
  faSpinner,
  faHourglassEmpty
} from '@fortawesome/free-solid-svg-icons';

const iconMap: Record<string, IconProp> = {
  // free-brands-svg-icons
  faGithub,
  // free-regular-svg-icons
  faCircle,
  // free-solid-svg-icons
  faCircleExclamation,
  faSpinner,
  faHourglassEmpty
};

const Icon: React.FC<
  Readonly<{ name: string } & Partial<FontAwesomeIconProps>>
> = ({ name, ...libraryProps }) => (
  <FontAwesomeIcon
    {...libraryProps}
    icon={iconMap[name]}
    className={`mr-2 ${libraryProps.className}`}
  />
);

export default Icon;
