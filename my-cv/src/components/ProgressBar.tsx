import type { ProgressBarProps } from '../types/progressBar';

const ProgressBar = ({ level }: ProgressBarProps) => (
  <div className="progress-bar">
    <div className="progress-level-bar" style={{ width: `${level}%` }}></div>
  </div>
);

export default ProgressBar;
