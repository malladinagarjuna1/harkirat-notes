import { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";

export function Otp() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();

  const [disabled, setDisabled] = useState(true);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (val, index) => {
    if (!/^\d?$/.test(val)) return; // Only digits allowed, max 1 char

    const newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);

    // Enable button if all digits filled
    setDisabled(newOtp.includes("") ? true : false);

    // Move to next input if value entered
    if (val !== "") {
      if (index === 0) ref2.current.focus();
      else if (index === 1) ref3.current.focus();
      else if (index === 2) ref4.current.focus();
      else if (index === 3) ref5.current.focus();
      else if (index === 4) ref6.current.focus();
    }
  };

  return (
    <div className="flex justify-center items-center gap-2">
      <SubOtpBox ref={ref1} value={otp[0]} onChange={(val) => handleChange(val, 0)} />
      <SubOtpBox ref={ref2} value={otp[1]} onChange={(val) => handleChange(val, 1)} />
      <SubOtpBox ref={ref3} value={otp[2]} onChange={(val) => handleChange(val, 2)} />
      <SubOtpBox ref={ref4} value={otp[3]} onChange={(val) => handleChange(val, 3)} />
      <SubOtpBox ref={ref5} value={otp[4]} onChange={(val) => handleChange(val, 4)} />
      <SubOtpBox ref={ref6} value={otp[5]} onChange={(val) => handleChange(val, 5)} />
      <Button disabled={disabled} className="ml-4">Sign up</Button>
    </div>
  );
}

// Forwarding ref to access it from parent
const SubOtpBox = React.forwardRef(({ value, onChange }, ref) => {
  return (
    <input
      type="text"
      maxLength="1"
      value={value}
      ref={ref}
      onChange={(e) => onChange(e.target.value)}
      className="w-[40px] h-[50px] text-center text-white text-xl rounded-2xl bg-blue-500 outline-none"
    />
  );
});
