import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PlaceholderProps {
  title: string;
}

const PlatformPlaceholder = ({ title }: PlaceholderProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">{title}</h2>
        <p className="text-muted-foreground">This section is under development</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Coming Soon</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This feature will be available in a future update.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlatformPlaceholder;