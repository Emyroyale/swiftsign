'use client'
import { useEffect, useState } from 'react'

// Your Google Client ID and API Key
const CLIENT_ID = '631619998808-b64hl0mfb7knlppt892l6le2e0lc2e3f.apps.googleusercontent.com'
const API_KEY = 'AIzaSyDKc2OIpReGUWfExUV3yQ0k8rj0ta_hRW8'
const SCOPES = 'https://www.googleapis.com/auth/drive.readonly'

interface GoogleDrivePickerProps {
  onFileSelected: (file: any) => void
  buttonText?: string
  className?: string
}

export default function GoogleDrivePicker({ 
  onFileSelected, 
  buttonText = 'Pick from Drive',
  className = ''
}: GoogleDrivePickerProps) {
  const [pickerApiLoaded, setPickerApiLoaded] = useState(false)
  const [oauthToken, setOauthToken] = useState<string | null>(null)

  useEffect(() => {
    // Load the Google API client and Picker API
    const script = document.createElement('script')
    script.src = 'https://apis.google.com/js/api.js'
    script.onload = () => {
      // @ts-ignore
      window.gapi.load('client:picker', () => {
        setPickerApiLoaded(true)
      })
    }
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handleAuthClick = () => {
    // @ts-ignore
    const tokenClient = window.google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback: (response: any) => {
        if (response.access_token) {
          setOauthToken(response.access_token)
          showPicker(response.access_token)
        }
      },
    })
    tokenClient.requestAccessToken()
  }

  const showPicker = (accessToken: string) => {
    // @ts-ignore
    const picker = new window.google.picker.PickerBuilder()
      .addView(
        // @ts-ignore
        new window.google.picker.DocsView()
          .setIncludeFolders(true)
          .setMimeTypes('application/pdf')
      )
      .setOAuthToken(accessToken)
      .setDeveloperKey(API_KEY)
      .setCallback(pickerCallback)
      .build()
    picker.setVisible(true)
  }

  const pickerCallback = (data: any) => {
    // @ts-ignore
    if (data.action === window.google.picker.Action.PICKED) {
      const file = data.docs[0]
      onFileSelected(file)
    }
  }

  const handleClick = () => {
    if (!pickerApiLoaded) {
      alert('Google Picker is still loading...')
      return
    }
    handleAuthClick()
  }

  return (
    <>
      {/* Load Google Identity Services */}
      <script src="https://accounts.google.com/gsi/client" async defer></script>
      
      <button
        onClick={handleClick}
        className={className || "bg-white border-2 border-blue-500 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all flex items-center gap-2"}
      >
        <svg viewBox="0 0 87.3 78" className="w-6 h-6">
          <path fill="#0066da" d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"/>
          <path fill="#00ac47" d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"/>
          <path fill="#ea4335" d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"/>
          <path fill="#00832d" d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"/>
          <path fill="#2684fc" d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"/>
          <path fill="#ffba00" d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"/>
        </svg>
        {buttonText}
      </button>
    </>
  )
}