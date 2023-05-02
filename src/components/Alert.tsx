import React from 'react';

export type TProps = {
  success: boolean;
  message: string;
  handleClose: () => void;
};
export const Alert = (props: TProps) => {
  return (
    <React.Fragment>
      <div
        className={`${
          props.success ? 'bg-teal-700 ' : 'bg-rose-500 '
        } w-/12 relative mx-auto mb-8 flex justify-between rounded-lg px-5 py-3 text-xs text-white`}
      >
        <p>{props.message}</p>
        <span className="mt-1 cursor-pointer" onClick={props.handleClose}>
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="12"
            height="12"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <polygon
              points="48.98 46.86 27.11 24.99 48.96 3.13 46.84 1.01 24.99 22.86 3.12 1 1 3.12 22.86 24.99 1 46.85 3.12 48.98 24.99 27.11 46.86 48.98 48.98 46.86"
              fill="#fff"
            ></polygon>
          </svg>
        </span>
      </div>
    </React.Fragment>
  );
};
