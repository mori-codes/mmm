import { JSX } from "preact"

const People = ({ className }: JSX.HTMLAttributes<SVGElement>) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className={className}
  >
    <rect width="20" height="20" fill="url(#pattern1)" />
    <defs>
      <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#people" transform="scale(0.0104167)" />
      </pattern>
      <image
        id="people"
        width="96"
        height="96"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAC2klEQVR4nO2Z0U7bUBBE5wX3X4p5ykO+kooU0n5MKf/QUn6jCgT1KdVWkW4lCyHDtb27Y2eOdKU82bs7zvh6LiCEEEL4cQFgA+AXgOeyjr+vALRO91wD2AGwd6zF8gHAFwB/e5o/ALgB0CQN35Y8/LuKIXyfSITa4S9WgK+VQzAA1wnDt6V6fp/t9NnRefDwFynAZuAgDMCnAfdbAfg94p6L42HEMO4Dn/zFCrAfMYynwCd/sQI8jRjGo8Pwd+WfcjJ4W9C6wnZObvgoX7hDBbh849p68t9BW7aUtcM/APjYc109+RXcDBBgEzT8jGwqnGOscFsx/G8AzpyHn5VNpdGUeKHPjg7laYwYfkY2RcF5+cK9L98I+/L7MtDzM7KpWbOe2POjs6lZs5r4Iys6m5o1a4ePrMhsatasnOKFqGwqjbbsof/vq2ub/APgZ8mBph7+2GyKWoDjNm078AU3dO0GZDuLtKCm7JWNfPhjsynal/B2JsP3zKbSGNpQxvC9sqlUrmY2/KmzqXTGvNRq1w+ybIqCMdu62vVMlE3RYMFLvEACJCMBkpEAybAL0I7Mpl7bCFCdGbMK0ARkU4eylU09rmQUoAnOpm4zRWAUYJtQ12ckwSZAG5xNpZ8ZswmwSagpNa5mE+AhUYCUAxs2AfaJAqQcWbIJYMkrHLYGTQJIgFD0D4AsqIssSBYUiywIsqAusiBZUCyyIMiCusiCZEGxyIIgC+oiC5IFxSILgiyoiyxIFhSLLAiyoJO2oJd4Hym+hQSQALlIgGQkQDISIBkJkIwESEYCnLgA7PW4w9awkdXjDlvDRlaPO2wNG1k97rA1bGT1uMPWsJHV4w5bw0ZWjztsDRtZPe6wNWxk9bjD1rCR1eMOW8NGVo87bA0bWT3usDVsZPW4w9awkdXjDlvDRlaPO2wNG1k97rA1bGT1uMPWsJHV4w5bw0ZWjztsDRtZPUIIIQRe4x8ZzDxjilU20QAAAABJRU5ErkJggg=="
      />
    </defs>
  </svg>
)

export { People }
