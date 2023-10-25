export interface GetPromptTemplate {
  prompt_name: string;
  version?: number;
  label?: string;
}

export interface PromptTemplate {
  prompt_template: any;
  metadata: any;
}

export interface PublishPromptTemplate {
  prompt_name: string;
  prompt_template: any;
  commit_message?: string;
  tags?: string[];
  metadata?: any;
}

export interface TrackRequest {
  api_key: string;
  provider_type?: string;
  function_name: string;
  args?: unknown[];
  kwargs?: Record<string, unknown>;
  request_end_time: string;
  request_start_time: string;
  prompt_id?: number;
  prompt_version?: number;
  metadata?: Record<string, string>;
  tags?: string[];
  request_response?: Record<string, unknown>;
  prompt_input_variables?: Record<string, string> | string[];
  [k: string]: unknown;
}