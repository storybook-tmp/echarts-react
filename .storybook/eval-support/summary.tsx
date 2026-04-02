import { evalSummary, hasEvalData } from './eval-data.ts';

export const Summary = () => {
	if (!hasEvalData) {
		return <EmptyState />;
	}

	return (
		<>
			<table>
				<tbody>
					<SummaryRow label="Project" value={evalSummary.projectName} />
					<SummaryRow label="ID" value={evalSummary.id} />
					<SummaryRow label="Created at" value={formatTimestamp(evalSummary.createdAt)} />
					<SummaryRow label="Prompt" value={evalSummary.promptName} />
					<SummaryRow label="Agent" value={evalSummary.agent} />
					<SummaryRow label="Model" value={evalSummary.model} />
					<SummaryRow label="Effort" value={evalSummary.effort} />
					<SummaryRow label="Score" value={evalSummary.score.toFixed(2)} />
					<SummaryRow label="Build" value={evalSummary.buildSuccess ? 'PASS' : 'FAIL'} />
					<SummaryRow label="TypeScript errors" value={evalSummary.typeCheckErrors} />
					<SummaryRow
						label="Baseline ghost stories"
						value={formatGhostStories(evalSummary.baselineGhostStories)}
					/>
					<SummaryRow
						label="Post-agent ghost stories"
						value={formatGhostStories(evalSummary.postAgentGhostStories)}
					/>
					<SummaryRow label="Screenshots" value={evalSummary.screenshots.length} />
					<SummaryRow label="Duration" value={`${evalSummary.durationSeconds}s`} />
					<SummaryRow
						label="Cost"
						value={evalSummary.cost == null ? '-' : `$${evalSummary.cost.toFixed(2)}`}
					/>
				</tbody>
			</table>

			<h2>Changed Files</h2>
			{evalSummary.fileChanges.length === 0 ? (
				<p>No file changes were recorded.</p>
			) : (
				<ul>
					{evalSummary.fileChanges.map((change) => (
						<li key={change.path}>
							<code>{change.gitStatus}</code> <code>{change.path}</code>
						</li>
					))}
				</ul>
			)}
		</>
	);
};

function EmptyState() {
	return (
		<p>
			No eval results are available yet. The placeholder <code>eval-results/data.json</code> can stay
			set to <code>{'{}'}</code> until a trial populates it.
		</p>
	);
}

function SummaryRow({ label, value }: { label: string; value: React.ReactNode }) {
	return (
		<tr>
			<td>
				<strong>{label}</strong>
			</td>
			<td>{value}</td>
		</tr>
	);
}

function formatGhostStories(
	ghostStories:
		| {
				candidateCount: number;
				passed: number;
				total: number;
				successRate: number;
		  }
		| null,
) {
	if (!ghostStories) {
		return '-';
	}

	return `${ghostStories.passed}/${ghostStories.total} (${Math.round(ghostStories.successRate * 100)}%), ${ghostStories.candidateCount} candidate(s)`;
}

function formatTimestamp(value: string) {
	if (!value) {
		return '-';
	}

	const date = new Date(value);
	if (Number.isNaN(date.getTime())) {
		return value;
	}

	return `${date.toLocaleString()} (${value})`;
}
