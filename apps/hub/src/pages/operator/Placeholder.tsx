import { Settings } from "@/components/Settings";

interface PlaceholderProps {
  title: string;
}

const OperatorPlaceholder = ({ title }: PlaceholderProps) => {
  // If it's the settings page, render the Settings component
  if (title.toLowerCase() === "settings") {
    return <Settings role="operator" />;
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">{title}</h2>
        <p className="text-muted-foreground">This section is under development</p>
      </div>
    </div>
  );
};

export default OperatorPlaceholder;