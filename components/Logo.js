import React from 'react'
import PropTypes from 'prop-types'

const Logo = props =>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="root"
    viewBox="0 0 1315 1315">
    <path fill="#f2db4f" d="M0 0h1315v1315H0z" />
    <path
      fill="#323331"
      d="M559.384 575.737c-50.585-9.856-80.625-52.28-80.625-113.862 0-24.604 4.4-45.09 13.69-63.75 7.295-14.65 15.655-24.595 27.902-33.196 30.876-21.684 80.86-23.226 114.302-3.526 9.652 5.686 24.915 21.154 30.69 31.105 10.597 18.252 15.742 37.406 16.83 62.65 2.698 62.547-23.543 106.034-71.613 118.68-12.804 3.37-38.69 4.33-51.176 1.897zm32.972-48.933c19.872-5.9 28.583-28.42 27.294-70.554-.838-27.41-4.394-40.375-13.697-49.95-6.696-6.89-13.69-9.422-25.944-9.393-9.38.023-11.41.456-17.31 3.7-14.963 8.222-21.44 26.852-21.44 61.656 0 37.388 8.462 57.888 26.465 64.106 8.22 2.838 16.07 2.977 24.63.434zm157.653 49.354c-10.87-1.37-23.784-4.528-34.064-8.33l-8.437-3.118v-24.855c0-16.37.442-24.855 1.298-24.855.715 0 3.387 1.058 5.938 2.35 7.757 3.93 31.973 11.263 44.276 13.405 13.345 2.325 29.125 1.792 36.15-1.218 7.577-3.248 11.087-8.542 11.087-16.722 0-6.67-.265-7.246-5.7-12.454-4.157-3.982-12.528-8.808-30.938-17.833-30.352-14.88-38.042-19.72-47.32-29.77-15.896-17.22-19.654-47.51-8.71-70.213 7.13-14.794 25.12-27.16 46.417-31.91 20.384-4.544 49.574-3.696 70.382 2.046 14.905 4.112 34.82 12.49 34.105 14.35-6.77 17.645-17.72 41.68-18.764 41.193-.742-.347-7.644-3.206-15.337-6.352-36.408-14.888-61.637-12.05-61.637 6.932 0 10.325 3.205 12.818 39.367 30.606 28.14 13.84 32.38 16.334 40.373 23.736 13.56 12.554 19.034 25.66 18.99 45.464-.08 36.44-23.976 60.636-66.23 67.07-12.674 1.93-37.89 2.165-51.25.48zm328.124-.42c-50.585-9.857-80.625-52.28-80.625-113.863 0-24.604 4.4-45.09 13.69-63.75 7.295-14.65 15.655-24.595 27.902-33.196 30.876-21.684 80.86-23.226 114.302-3.526 9.652 5.686 24.915 21.154 30.69 31.105 10.597 18.252 15.742 37.406 16.83 62.65 2.698 62.547-23.543 106.034-71.613 118.68-12.805 3.37-38.69 4.33-51.176 1.897zm32.972-48.934c19.872-5.9 28.583-28.42 27.294-70.554-.838-27.41-4.394-40.375-13.697-49.95-6.696-6.89-13.69-9.422-25.944-9.393-9.38.023-11.41.456-17.31 3.7-14.963 8.222-21.44 26.852-21.44 61.656 0 37.388 8.462 57.888 26.465 64.106 8.22 2.838 16.07 2.977 24.63.434zM900.01 418.75v-155H961.258v310H900.008zM876.06 1029.854c26.13 42.662 60.124 74.02 120.246 74.02 50.507 0 82.772-25.242 82.772-60.122 0-41.797-33.15-56.6-88.743-80.918l-30.473-13.075c-87.96-37.474-146.394-84.42-146.394-183.663 0-91.42 69.656-161.013 178.514-161.013 77.5 0 133.217 26.973 173.367 97.596l-94.92 60.947c-20.9-37.474-43.445-52.237-78.448-52.237-35.703 0-58.33 22.65-58.33 52.237 0 36.567 22.648 51.37 74.946 74.02l30.474 13.054c103.567 44.414 162.042 89.69 162.042 191.488 0 109.744-86.21 169.866-201.987 169.866-113.203 0-186.34-53.945-222.124-124.65zm-430.596 10.563c19.15 33.973 36.568 62.696 78.448 62.696 40.047 0 65.31-15.67 65.31-76.594V612.043h121.893v416.122c0 126.216-74 183.662-182.014 183.662-97.596 0-154.115-50.507-182.858-111.34z"
    />

    <style jsx>{`
      .root {
        position: fixed;
        right: 0;
        bottom: 0;
        width: 100%;
        max-width: 1200px;
      }
    `}</style>
  </svg>

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
}

Logo.defaultProps = {
  width: 1315,
  height: 1315
}

export default Logo