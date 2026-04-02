import rawData from '../../eval-results/data.json';
import type { TranscriptMessage, TranscriptProps } from './transcript.types.ts';

type JsonObject = Record<string, unknown>;

const asObject = (value: unknown): JsonObject =>
	typeof value === 'object' && value !== null && !Array.isArray(value) ? (value as JsonObject) : {};

const asString = (value: unknown, fallback = '-'): string =>
	typeof value === 'string' && value.length > 0 ? value : fallback;

const asNumber = (value: unknown, fallback = 0): number =>
	typeof value === 'number' && Number.isFinite(value) ? value : fallback;

const asBoolean = (value: unknown, fallback = false): boolean =>
	typeof value === 'boolean' ? value : fallback;

const asArray = <T,>(value: unknown): T[] => (Array.isArray(value) ? (value as T[]) : []);

const asGhostStories = (value: unknown) => {
	const ghostStories = asObject(value);
	if (Object.keys(ghostStories).length === 0) {
		return null;
	}

	return {
		candidateCount: asNumber(ghostStories.candidateCount),
		passed: asNumber(ghostStories.passed),
		total: asNumber(ghostStories.total),
		successRate: asNumber(ghostStories.successRate),
	};
};

const data = asObject(rawData);
const docs = asObject(data.docs);
const grade = asObject(data.grade);
const project = asObject(data.project);
const prompt = asObject(data.prompt);
const score = asObject(data.score);
const variant = asObject(data.variant);
const execution = asObject(data.execution);

export const hasEvalData = Object.keys(data).length > 0;

export const evalSummary = {
	projectName: asString(project.name),
	id: asString(data.id),
	createdAt: asString(data.timestamp),
	promptName: asString(prompt.name),
	agent: asString(variant.agent),
	model: asString(variant.model),
	effort: asString(variant.effort),
	score: asNumber(score.score),
	buildSuccess: asBoolean(grade.buildSuccess),
	typeCheckErrors: asNumber(grade.typeCheckErrors),
	baselineGhostStories: asGhostStories(grade.baselineGhostStories),
	postAgentGhostStories: asGhostStories(grade.ghostStories),
	screenshots: asArray(execution.screenshots ?? data.screenshots),
	durationSeconds: Math.round(asNumber(execution.duration)),
	cost: execution.cost == null ? null : asNumber(execution.cost),
	fileChanges: asArray<{ path?: unknown; gitStatus?: unknown }>(grade.fileChanges).map((change) => ({
		path: asString(change.path),
		gitStatus: asString(change.gitStatus),
	})),
};

export const transcriptProps: TranscriptProps = {
	evalId: asString(data.id, ''),
	createdAt: asString(data.timestamp, ''),
	prompt: asString(asObject(docs.transcript).prompt, ''),
	promptTokenCount: asNumber(asObject(docs.transcript).promptTokenCount),
	promptCost: asNumber(asObject(docs.transcript).promptCost),
	messages: asArray<TranscriptMessage>(asObject(docs.transcript).messages),
};
