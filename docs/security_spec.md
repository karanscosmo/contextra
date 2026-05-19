# CONTEXTRA Security Specification

## 1. Data Invariants
- A `Workspace` must belong to an `Organization`.
- A `Project`, `SemanticNode`, `SemanticEdge`, `Agent`, `AgentRun`, and `Document` must belong to a `Workspace`.
- Access to all workspace resources is gated by membership in the `Workspace.members` map.
- User profiles can only be read/written by the owner or a global admin.
- Organizations can only be managed by the owner.

## 2. The "Dirty Dozen" Payloads (Red Team Payloads)
1. **Identity Spoofing**: Attempt to create a user profile with a different `uid`.
2. **Privilege Escalation**: Attempt to update own `role` to `ADMIN` in the `User` document.
3. **Ghost Write**: Attempt to create a `Document` in a workspace the user is not a member of.
4. **Relationship Poisoning**: Create a `SemanticEdge` between nodes that don't exist.
5. **Orphaned Run**: Create an `AgentRun` for an `Agent` that doesn't exist.
6. **Workspace Takeover**: Attempt to add self to `Workspace.members` without being a workspace admin.
7. **Vector Injection**: Inject a 1MB random string into a `SemanticNode.label`.
8. **State Shortcut**: Move an `Agent.status` from `IDLE` directly to `SUCCESS` without a transitional `RUNNING` state.
9. **Citation Link Hijack**: Connect a `SemanticNode` to a `Document` in a different workspace.
10. **Admin Bypass**: Attempt to delete an `Organization` as a `RESEARCHER`.
11. **Shadow Update**: Update a `Document` with an extra field `isMalicious: true`.
12. **PII Leak**: Read a `User` profile of another user.

## 3. Test Runner (Draft)
I will implement `firestore.rules.test.ts` to verify these.

## 4. Conflict Report - Identity Spoofing
| Collection | Identity Spoofing | State Shortcutting | Resource Poisoning |
| :--- | :--- | :--- | :--- |
| Users | Blocked by `auth.uid == userId` | N/A | Regex + Size checks |
| Workspaces | Blocked by `orgOwner` | N/A | Size checks |
| Projects | Blocked by `isMember()` | Transition guards | Size checks |
| nodes | Blocked by `isMember()` | N/A | Vector ID regex |
| agents | Blocked by `isMember()` | Status enum validation | Plan size limits |
