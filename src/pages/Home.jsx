import ComponentExamples from './ComponentExamples';
import { Button } from '../components/Button';

export default function Home() {
  return (
    <div className="p-8 space-y-12">
      <div className="max-w-[800px] flex items-center gap-2 p-4 rounded-lg bg-offset">
        <div className="flex-1">
          <p className="text-sm font-medium text-default">Create a new repo using this template.</p>
        </div>
        <Button
          href="https://github.com/new?template_name=sail-dashboard-starter&template_owner=eliang-stripe"
          target="_blank"
          rel="noopener noreferrer"
          icon="external"
          className="shrink-0"
          variant="secondary"
        >
          Use this template
        </Button>
      </div>

      <div>
        <h1 className="text-2xl font-semibold text-default mb-2">Home</h1>
        <p className="text-subdued">Edit <code className="bg-offset px-2 py-1 rounded text-sm">src/pages/home.jsx</code> to edit this page.</p>
      </div>

      <h1 className="text-2xl font-semibold text-default mb-8">Components</h1>

      <ComponentExamples />
    </div>
  );
}
