import * as core from '@actions/core';
import * as github from '@actions/github';

import {
  updateTag,
  validateIfReleaseIsPublished,
} from './api-utils';
import {
  validateSemverVersionFromTag,
  getMajorMinorTagFromFullTag
} from './version-utils';

async function run(): Promise<void> {
  try {
    const token = core.getInput('token');
    const octokitClient = github.getOctokit(token);
    const sourceTagName = core.getInput('source-tag');

    validateSemverVersionFromTag(sourceTagName);

    await validateIfReleaseIsPublished(sourceTagName, octokitClient);

    const majorMinorTag = getMajorMinorTagFromFullTag(sourceTagName);
    await updateTag(sourceTagName, majorMinorTag, octokitClient);

    core.setOutput('major-minor-tag', majorMinorTag);
    core.info(
      `The '${majorMinorTag}' tag now points to the '${sourceTagName}' tag`
    );

  } catch (error) {
    core.setFailed((error as Error).message);
  }
}

run();
