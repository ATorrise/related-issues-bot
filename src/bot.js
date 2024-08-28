const { Octokit } = require('@octokit/rest');
const { analyzeAndSuggestIssues } = require('./related-issues');
const config = require('./config');

const octokit = new Octokit({ auth: config.githubToken });

module.exports = async function handleIssue(context) {
    const { body, number } = context.payload.issue;
    const repo = context.payload.repository.name;
    const owner = context.payload.repository.owner.login;

    // Analyze the issue and find related ones
    const relatedIssues = await analyzeAndSuggestIssues(body, repo, owner);

    if (relatedIssues.length > 0) {
        let commentBody = "We found some related issues that might be relevant to your issue:\n\n";
        relatedIssues.forEach(issue => {
            commentBody += `- [#${issue.number}](${issue.html_url}): ${issue.title}\n`;
        });

        // Post a comment on the newly created issue with the related issues
        await octokit.issues.createComment({
            owner,
            repo,
            issue_number: number,
            body: commentBody
        });
    }
};