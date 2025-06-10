import React, { useState } from "react";
import { useEffect } from "react";

import Input from "./../Small Component/Input/Input";
import Button from "./../Small Component/Button/Button";
import TextArea from "../Small Component/TextArea/TextArea";
import Select from "./../Small Component/Select/Select";

type MultiStepFormProps = {
  initialStep?: number;
  initialValues?: {
    firstName?: string;
    dob?: string;
    email?: string;
    phone?: string;
    message?: string;
  };
  storybookVariant?: "empty" | "prefilled" | "error";
};

const MultiStepForm = ({
  initialStep = 1,
  initialValues = {},
  storybookVariant = "empty",
}: MultiStepFormProps) => {
  const [step, setStep] = useState(initialStep);

  const [formData, setFormData] = useState({
    firstName: initialValues.firstName || "",
    lastName: "",
    dob: initialValues.dob || "",
    gender: "",
    email: initialValues.email || "",
    phone: initialValues.phone || "",
    address: "",
    country: "",
    message: "",
    comments: "",
  });

  const steps = ["Personal Info", "Contact Info", "Message"];
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const handleNext = () => {
    const newErrors: { [key: string]: boolean } = {};

    if (step === 1) {
      if (!formData.firstName) newErrors.firstName = true;
      if (!formData.dob) newErrors.dob = true;
    }

    if (step === 2) {
      if (!formData.email) newErrors.email = true;
      if (!formData.phone) newErrors.phone = true;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      alert("Please fill in all required fields.");
      return;
    }

    setErrors({});
    setStep(step + 1);
  };

  const handleSkip = () => {
    setErrors({});
    setStep(step + 1);
  };

  const handlePrev = () => setStep(step - 1);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();

    if (!formData.message) {
      setErrors({ message: true });
      alert("Message is required");
      return;
    }
    setErrors({});
    alert("Form submitted successfully!");
    console.log(formData);
  };

  useEffect(() => {
    if (storybookVariant === "error") {
      const newErrors: { [key: string]: boolean } = {};
      if (step === 1) {
        if (!formData.firstName) newErrors.firstName = true;
        if (!formData.dob) newErrors.dob = true;
      }
      if (step === 2) {
        if (!formData.email) newErrors.email = true;
        if (!formData.phone) newErrors.phone = true;
      }
      if (step === 3) {
        if (!formData.message) newErrors.message = true;
      }
      setErrors(newErrors);
    }
  }, [step, storybookVariant]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        minHeight: "100vh",
        padding: "2rem",
        boxSizing: "border-box",
        backgroundColor: "var(--surface-background)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "640px",
          padding: "2rem",
          backgroundColor: "var(--surface-card)",
          color: "var(--text-primary)",
          border: "1px solid var(--surface-border)",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: "bold",
            marginBottom: "2rem",
            textAlign: "center",
            color: "var(--text-primary)",
          }}
        >
          Multi-Step Form
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "2rem",
            gap: "0.5rem",
          }}
        >
          {steps.map((label, i) => {
            const isActive = step === i + 1;
            const isCompleted = step > i + 1;

            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flex: 1,
                  minWidth: 0,
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "14px",
                    color: "white",
                    backgroundColor: isCompleted
                      ? "var(--color-success)"
                      : isActive
                      ? "var(--color-primary)"
                      : "var(--surface-border)",
                  }}
                >
                  {isCompleted ? "✓" : i + 1}
                </div>
                <span
                  style={{
                    fontSize: "13px",
                    marginTop: "0.25rem",
                    textAlign: "center",
                    color: "var(--text-secondary)",
                    wordBreak: "break-word",
                  }}
                >
                  {label}
                </span>
              </div>
            );
          })}
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div style={{ display: "grid", gap: "1rem", marginBottom: "1rem" }}>
              <Input
                label="First Name"
                name="firstName"
                placeholder="Enter Your First Name"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                showRequired={errors.firstName}
              />
              <Input
                label="Last Name"
                name="lastName"
                placeholder="Enter Your Last Name"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
              />
              <Input
                label="Date of Birth"
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                showRequired={errors.dob}
              />
              <div>
                <Select
                  label="Select Gender"
                  name="gender"
                  onChange={() => {}}
                  options={["Male", "Female", "Other"]}
                  placeholder="Choose gender"
                  value=""
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div style={{ display: "grid", gap: "1rem", marginBottom: "1rem" }}>
              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                showRequired={errors.email}
              />
              <Input
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                showRequired={errors.phone}
              />
              <Input
                label="Address"
                name="address"
                type="text"
                value={formData.address}
                onChange={handleChange}
              />
              <Input
                type="text"
                label="Country"
                name="country"
                placeholder="Enter your Country"
                value={formData.country}
                onChange={handleChange}
              />
            </div>
          )}

          {step === 3 && (
            <div style={{ display: "grid", gap: "1rem", marginBottom: "1rem" }}>
              <div>
                <TextArea
                  name="message"
                  label="Message"
                  size={4}
                  value={formData.message}
                  onChange={handleChange}
                  showRequired={errors.message}
                />
              </div>
              <div>
                <TextArea
                  name="comments"
                  label="Additional Comments:"
                  size={4}
                  value={formData.comments}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            {step > 1 ? (
              <Button
                size="large"
                variant="surface-border"
                onClick={handlePrev}
              >
                Previous
              </Button>
            ) : (
              <div />
            )}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              {step === 2 && (
                <span
                  style={{
                    marginBottom: "0.25rem",
                    fontSize: "0.875rem",
                    color: "var(--text-secondary)",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={handleSkip}
                >
                  Skip
                </span>
              )}

              {step < 3 && (
                <Button size="large" variant="primary" onClick={handleNext}>
                  Next
                </Button>
              )}
              {step === 3 && (
                <Button size="large" variant="success" type="submit">
                  Submit
                </Button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MultiStepForm;
