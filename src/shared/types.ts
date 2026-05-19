export enum UserRole {
  OWNER = 'OWNER',
  ADMIN = 'ADMIN',
  RESEARCHER = 'RESEARCHER',
  VIEWER = 'VIEWER'
}

export interface User {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  role: UserRole;
  activeWorkspaceId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Workspace {
  id: string;
  orgId: string;
  name: string;
  members: Record<string, UserRole>;
  type: 'PERSONAL' | 'TEAM' | 'ENTERPRISE';
  createdAt: string;
}

export interface SemanticNode {
  id: string;
  workspaceId: string;
  label: string;
  type: string;
  properties: Record<string, any>;
  embedding?: number[];
  sourceId?: string;
  createdAt: string;
}

export interface SemanticEdge {
  id: string;
  workspaceId: string;
  sourceNodeId: string;
  targetNodeId: string;
  relationshipType: string;
  strength: number;
  metadata?: Record<string, any>;
}

export interface Agent {
  id: string;
  workspaceId: string;
  name: string;
  role: string;
  goals: string[];
  status: 'IDLE' | 'RUNNING' | 'FAILED' | 'SUCCESS';
  lastRunAt?: string;
}

export interface Document {
  id: string;
  workspaceId: string;
  name: string;
  type: string;
  url?: string;
  content?: string;
  summary?: string;
  processed: boolean;
  createdAt: string;
}
