/**
 * Google Analytics Reports API Module
 *
 * This module handles interactions with the Google Analytics Data API for reports.
 */
import { analyticsDataClient, formatPropertyId, getDefaultPropertyId } from '../auth/google-auth.js';
/**
 * Run a basic report against the Google Analytics Data API
 */
export async function runReport(params) {
    const propertyId = params.propertyId || getDefaultPropertyId();
    try {
        const response = await analyticsDataClient.properties.runReport({
            property: formatPropertyId(propertyId),
            requestBody: {
                dateRanges: params.dateRanges,
                metrics: params.metrics,
                dimensions: params.dimensions,
                dimensionFilter: params.dimensionFilter,
                metricFilter: params.metricFilter,
                offset: params.offset?.toString(),
                limit: params.limit?.toString(),
            }
        });
        return response.data;
    }
    catch (error) {
        console.error('Error running report:', error);
        throw error;
    }
}
/**
 * Run a realtime report against the Google Analytics Data API
 */
export async function runRealtimeReport(params) {
    const propertyId = params.propertyId || getDefaultPropertyId();
    try {
        const response = await analyticsDataClient.properties.runRealtimeReport({
            property: formatPropertyId(propertyId),
            requestBody: {
                metrics: params.metrics,
                dimensions: params.dimensions,
                dimensionFilter: params.dimensionFilter,
                metricFilter: params.metricFilter,
                limit: params.limit?.toString(),
            }
        });
        return response.data;
    }
    catch (error) {
        console.error('Error running realtime report:', error);
        throw error;
    }
}
/**
 * Run a batch report against the Google Analytics Data API
 */
export async function batchRunReports(requests, propertyId) {
    const resolvedPropertyId = propertyId || getDefaultPropertyId();
    try {
        const response = await analyticsDataClient.properties.batchRunReports({
            property: formatPropertyId(resolvedPropertyId),
            requestBody: {
                requests: requests.map(params => ({
                    dateRanges: params.dateRanges,
                    metrics: params.metrics,
                    dimensions: params.dimensions,
                    dimensionFilter: params.dimensionFilter,
                    metricFilter: params.metricFilter,
                    offset: params.offset?.toString(),
                    limit: params.limit?.toString(),
                })),
            }
        });
        return response.data;
    }
    catch (error) {
        console.error('Error running batch reports:', error);
        throw error;
    }
}
