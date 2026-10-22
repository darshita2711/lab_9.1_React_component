
import type { AlertBoxProps } from '../../types';


export function AlertBox({
  type,
  message,
  onClose,
  children,
}: AlertBoxProps) {
  const alertStyles = {
    success: 'alert-success',
    error: 'alert-error',
    warning: 'alert-warning',
    info: 'alert-info',
  };

  return (
    <div className={`alert-box ${alertStyles[type]}`}>
      <div className="alert-content">
        <p>{message}</p>

        {onClose && (
          <button type="button" onClick={onClose}>
            ×
          </button>
        )}
      </div>

      {children && (
        <div className="alert-children">{children}</div>
      )}
    </div>
  );
}
