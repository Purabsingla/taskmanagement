import React, { useState } from "react";
import {
  Camera,
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Upload,
  ArrowRight,
  Check,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/Input2";
import { Label } from "../components/ui/label";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { Progress } from "../components/ui/progress";

// Define the steps in the sign-up process
type Step = "personal-info" | "profile-picture" | "complete";

// Define the form data structure
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  profilePicture: string | null;
}

function Details() {
  // State for tracking the current step
  const [currentStep, setCurrentStep] = useState<Step>("personal-info");

  // State for form data
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    profilePicture: null,
  });

  // State for form validation
  const [errors, setErrors] = useState<Partial<FormData>>({});

  // Calculate progress percentage
  const getProgressPercentage = () => {
    switch (currentStep) {
      case "personal-info":
        return 33;
      case "profile-picture":
        return 66;
      case "complete":
        return 100;
      default:
        return 0;
    }
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  // Validate personal info form
  const validatePersonalInfo = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    const phoneRegex = /^\d{10}$/;
    if (formData.phone && !phoneRegex.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.zip.trim()) newErrors.zip = "ZIP code is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission for personal info
  const handlePersonalInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validatePersonalInfo()) {
      setCurrentStep("profile-picture");
      window.scrollTo(0, 0);
    }
  };

  // Handle profile picture upload
  const handleProfilePictureUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          profilePicture: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle profile picture submission
  const handleProfilePictureSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep("complete");
    window.scrollTo(0, 0);
  };

  // Handle skipping profile picture
  const handleSkipProfilePicture = () => {
    setCurrentStep("complete");
    window.scrollTo(0, 0);
  };

  // Render progress indicator
  const renderProgressIndicator = () => {
    return (
      <div className="mb-8">
        <Progress value={getProgressPercentage()} className="mb-6" />
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                currentStep === "personal-info"
                  ? "bg-primary text-primary-foreground"
                  : "bg-primary/20 text-primary"
              }`}
            >
              <User size={20} />
            </div>
            <span className="text-sm mt-2">Personal Info</span>
          </div>

          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                currentStep === "profile-picture"
                  ? "bg-primary text-primary-foreground"
                  : currentStep === "complete"
                  ? "bg-primary/20 text-primary"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              <Camera size={20} />
            </div>
            <span className="text-sm mt-2">Profile Picture</span>
          </div>

          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                currentStep === "complete"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              <Check size={20} />
            </div>
            <span className="text-sm mt-2">Complete</span>
          </div>
        </div>
      </div>
    );
  };

  // Render personal info form
  const renderPersonalInfoForm = () => {
    return (
      <form onSubmit={handlePersonalInfoSubmit} className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">
          Personal Information
        </h2>
        <p className="text-muted-foreground mb-6">
          Please fill in your personal details to create your account.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName">
              First Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
              className={errors.firstName ? "border-destructive" : ""}
            />
            {errors.firstName && (
              <p className="text-destructive text-xs">{errors.firstName}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">
              Last Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
              className={errors.lastName ? "border-destructive" : ""}
            />
            {errors.lastName && (
              <p className="text-destructive text-xs">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
            Email Address <span className="text-destructive">*</span>
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john.doe@example.com"
              className={`pl-10 ${errors.email ? "border-destructive" : ""}`}
            />
          </div>
          {errors.email && (
            <p className="text-destructive text-xs">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(123) 456-7890"
              className={`pl-10 ${errors.phone ? "border-destructive" : ""}`}
            />
          </div>
          {errors.phone && (
            <p className="text-destructive text-xs">{errors.phone}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="dob">
            Date of Birth <span className="text-destructive">*</span>
          </Label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="dob"
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              className={`pl-10 ${errors.dob ? "border-destructive" : ""}`}
            />
          </div>
          {errors.dob && (
            <p className="text-destructive text-xs">{errors.dob}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">
            Address <span className="text-destructive">*</span>
          </Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="123 Main St"
              className={`pl-10 ${errors.address ? "border-destructive" : ""}`}
            />
          </div>
          {errors.address && (
            <p className="text-destructive text-xs">{errors.address}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="city">
              City <span className="text-destructive">*</span>
            </Label>
            <Input
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="New York"
              className={errors.city ? "border-destructive" : ""}
            />
            {errors.city && (
              <p className="text-destructive text-xs">{errors.city}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="state">
              State <span className="text-destructive">*</span>
            </Label>
            <Input
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="NY"
              className={errors.state ? "border-destructive" : ""}
            />
            {errors.state && (
              <p className="text-destructive text-xs">{errors.state}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="zip">
              ZIP Code <span className="text-destructive">*</span>
            </Label>
            <Input
              id="zip"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              placeholder="10001"
              className={errors.zip ? "border-destructive" : ""}
            />
            {errors.zip && (
              <p className="text-destructive text-xs">{errors.zip}</p>
            )}
          </div>
        </div>

        <div className="pt-4">
          <Button type="submit" className="w-full" size="lg">
            Continue to Profile Picture
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </form>
    );
  };

  // Render profile picture upload
  const renderProfilePictureUpload = () => {
    return (
      <form onSubmit={handleProfilePictureSubmit} className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Profile Picture</h2>
        <p className="text-muted-foreground mb-6">
          Upload a profile picture to personalize your account.
        </p>

        <div className="flex flex-col items-center justify-center">
          <Avatar className="w-40 h-40 mb-6 border-2 border-dashed border-border">
            {formData.profilePicture ? (
              <AvatarImage
                src={formData.profilePicture}
                alt="Profile Preview"
              />
            ) : (
              <AvatarFallback className="bg-muted">
                <User className="h-16 w-16 text-muted-foreground" />
              </AvatarFallback>
            )}
          </Avatar>

          <Label
            htmlFor="profile-upload"
            className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            <Upload className="mr-2 h-4 w-4" />
            Choose Image
            <Input
              type="file"
              id="profile-upload"
              accept="image/*"
              onChange={handleProfilePictureUpload}
              className="hidden"
            />
          </Label>

          <p className="text-sm text-muted-foreground mt-2">
            Supported formats: JPG, PNG, GIF (Max 5MB)
          </p>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row gap-4">
          <Button
            type="submit"
            className="flex-1"
            size="lg"
            disabled={!formData.profilePicture}
          >
            Complete Sign Up
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <Button
            type="button"
            onClick={handleSkipProfilePicture}
            variant="outline"
            className="flex-1"
            size="lg"
          >
            Skip for now
          </Button>
        </div>
      </form>
    );
  };

  // Render completion screen
  const renderCompletionScreen = () => {
    return (
      <div className="text-center space-y-6">
        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
          <Check className="h-10 w-10 text-primary" />
        </div>

        <h2 className="text-2xl font-bold text-foreground">
          Sign Up Complete!
        </h2>
        <p className="text-muted-foreground">
          Thank you for signing up. Your account has been created successfully.
        </p>

        <div className="pt-4">
          <Button
            type="button"
            size="lg"
            onClick={() => setCurrentStep("personal-info")}
          >
            Go to Dashboard
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-muted/30 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-xl shadow-lg p-6 sm:p-10">
          {renderProgressIndicator()}

          <div className="mt-6">
            {currentStep === "personal-info" && renderPersonalInfoForm()}
            {currentStep === "profile-picture" && renderProfilePictureUpload()}
            {currentStep === "complete" && renderCompletionScreen()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
