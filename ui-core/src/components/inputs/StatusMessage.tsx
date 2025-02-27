import React from 'react';

import cx from 'classnames';

import InputStatusIcon from './InputStatusIcon';

export type Status = 'success' | 'info' | 'error' | 'warning' | 'loading';

export type StatusWithMessage = {
  status: Status;
  message?: string;
};

export type StatusMessageProps = {
  statusWithMessage: StatusWithMessage;
  showIcon?: boolean;
  small?: boolean;
};

const StatusMessage = ({ statusWithMessage, showIcon, small }: StatusMessageProps) => {
  const { status, message } = statusWithMessage;
  if (message === undefined) return null;

  return (
    <div className="status-message-wrapper">
      {showIcon && <InputStatusIcon status={status} small={small} />}
      <span className={cx('status-message', { [status]: status })}>{message}</span>
    </div>
  );
};

export default StatusMessage;
