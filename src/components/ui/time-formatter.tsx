import { Text } from '@mantine/core';

interface TimestampProps {
  createdAt: Date | string;
}

const formatTimestamp = (date: Date): string => {
  // Adjust "now" to be 4 hours earlier than actual current time
  // backend error?
  const now = new Date(Date.now() - 4 * 60 * 60 * 1000);
  const diffMs = now.getTime() - date.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  if (diffYears >= 1) {
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  }

  if (diffSeconds < 60) return 'now';
  if (diffMinutes < 60) return `${diffMinutes}m`;
  if (diffHours < 24) return `${diffHours}h`;
  if (diffDays < 30) return `${diffDays}d`;
  return `${diffMonths}mo`;
};

export const TimeFormatter = ({ createdAt }: TimestampProps) => {
  const date = typeof createdAt === 'string' ? new Date(createdAt) : createdAt;

  return (
    <Text size='xs' c='dimmed'>
      {formatTimestamp(date)}
    </Text>
  );
};
