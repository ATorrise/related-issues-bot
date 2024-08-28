const { Octokit } = require('@octokit/rest');
const compromise = require('compromise');

const octokit = new Octokit();

const extractKeyIdeas = (text) => {
    const doc = compromise(text);
    const ideas = doc.topics().out('array');
    return ideas;
};

const analyzeAndSuggestIssues = async (text, repo, owner) => {
    const issues = await octokit.issues.listForRepo({
        owner,
        repo,
        state: 'open'
    });

    const currentIdeas = extractKeyIdeas(text);
    const relatedIssues = [];

    for (const issue of issues.data) {
        const issueIdeas = extractKeyIdeas(issue.body);
        if (issueIdeas.some(idea => currentIdeas.includes(idea))) {
            relatedIssues.push(issue);
        }
    }

    return relatedIssues;
};

module.exports = { analyzeAndSuggestIssues };