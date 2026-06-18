// DEPRECATED: Use FULL_DATASET from './fullDataset' instead.
// This re-export preserves backwards compatibility for any code that
// still imports STARTER_PACK_ENTRIES. Safe to delete once all imports
// are migrated to FULL_DATASET.
export { FULL_DATASET as STARTER_PACK_ENTRIES } from './fullDataset';
export type { DatasetEntry } from '../types';
