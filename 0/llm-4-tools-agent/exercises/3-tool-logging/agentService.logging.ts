// ============================================
// תרגיל 3
// גרסת לוג של runAgent.
// להעתיק את הבלוקים המסומנים לתוך
// src/services/agentService.ts
// ============================================

  // ----- אחרי הקריאה הראשונה -----
  const calls = first.functionCalls

  console.log('')
  console.log('Q       :', message)
  console.log('TOOL    :', calls?.[0]?.name ?? 'none')
  console.log('ARGS    :', JSON.stringify(calls?.[0]?.args ?? {}))

  // כמה טוקנים עלתה הבקשה.
  // שימושי כדי להראות שכל כלי נשלח בכל פעם.
  console.log(
    'TOKENS  :',
    first.usageMetadata?.totalTokenCount ?? '?'
  )


  // ----- אחרי הרצת הכלי -----
  console.log('RESULT  :', JSON.stringify(result).slice(0, 200))


  // ----- אחרי הקריאה השנייה -----
  console.log('ANSWER  :', second.text?.slice(0, 120))
  console.log(
    'TOKENS 2:',
    second.usageMetadata?.totalTokenCount ?? '?'
  )
