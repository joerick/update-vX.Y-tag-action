# update-vX.Y-tag-action (forked from actions/publish action)

This action does the following
- Update a major-minor tag (v1.2, for example) to point to the latest release (v1.2.1, for example).
- Create a major-minor tag from the latest released tag if a major-minor tag doesn't exist 

## Usage
This action can be triggered automatically when a release is created or manually using a `workflow_dispatch` event. The actual major tag update will require manual approval. 
See [release-new-action-version.yml](./.github/workflows/release-new-action-version.yml) for usage example.

See [action.yml](action.yml) for a complete description of input and output fields.
Read more about action versioning notation in [action-versioning.md](https://github.com/actions/toolkit/blob/main/docs/action-versioning.md).

To roll back a release in case of customer impact, start the workflow manually and specify the previous stable tag.
