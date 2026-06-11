export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, org, bizEmail, scope } = body;

    // Slack webhook URL - replace this with your actual Slack webhook URL
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;

    if (!slackWebhookUrl) {
      return new Response(JSON.stringify({ error: 'Slack webhook URL not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Create Slack message payload
    const message = {
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: '🚨 New Lead Capture from Software 100 Landing Page',
          },
        },
        {
          type: 'divider',
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*Name / Business Name:*\n${name}`,
            },
            {
              type: 'mrkdwn',
              text: `*Industry:*\n${org}`,
            },
            {
              type: 'mrkdwn',
              text: `*Contact:*\n${bizEmail}`,
            },
          ],
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `*How can we help?*\n${scope}`,
          },
        },
      ],
    };

    // Send message to Slack
    const response = await fetch(slackWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });

    if (!response.ok) {
      throw new Error('Failed to send message to Slack');
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending Slack notification:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
