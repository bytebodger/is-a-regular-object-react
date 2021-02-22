import React from 'react';

export const isARegularObject = value => typeof value === 'object' && !Array.isArray(value) && value !== null && !React.isValidElement(value);
