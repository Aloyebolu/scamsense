// components/ui/FakeInput.tsx
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface FakeInputProps {
  id: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'phone';
  placeholder: string;
  isSensitive: boolean;
  onFocus?: () => void;
  onChange?: () => void;
  value?: string;
  disabled?: boolean;
}

export default function FakeInput({
  id,
  label,
  type,
  placeholder,
  isSensitive,
  onFocus,
  onChange,
  value: externalValue,
  disabled = false
}: FakeInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [localValue, setLocalValue] = useState('');

  const value = externalValue !== undefined ? externalValue : localValue;

  const handleFocus = () => {
    if (onFocus && !disabled) {
      onFocus();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange && !disabled) {
      onChange();
      // Clear the value after a short delay to show it's not being stored
      setTimeout(() => {
        if (!externalValue) {
          setLocalValue('');
        }
      }, 1000);
    }
    if (!externalValue) {
      setLocalValue(e.target.value);
    }
  };

  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
        {isSensitive && (
          <span className="ml-2 text-xs px-2 py-1 bg-error/10 text-error rounded-full">
            SENSITIVE
          </span>
        )}
      </label>
      <div className="relative">
        <input
          id={id}
          type={inputType}
          value={value}
          placeholder={placeholder}
          onFocus={handleFocus}
          onChange={handleChange}
          disabled={disabled}
          className={`
            w-full px-4 py-3 bg-background2 border rounded-lg
            ${isSensitive 
              ? 'border-error/50 focus:border-error focus:ring-2 focus:ring-error/20' 
              : 'border-border focus:border-primary focus:ring-2 focus:ring-primary/20'
            }
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-all duration-200
          `}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-text2 hover:text-foreground"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
      {isSensitive && (
        <p className="text-xs text-error flex items-center gap-1">
          ⚠️ This is sensitive information that scammers would try to steal
        </p>
      )}
    </div>
  );
}