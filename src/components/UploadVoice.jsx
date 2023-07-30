import { AudioRecorder } from 'react-audio-voice-recorder';
import Form from 'react-bootstrap/Form';

const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };

function UploadVoice(){
    return(
    <>
    <div className='uploadvoice'>
    <p>Say this: A quick brown fox jumps over the lazy dogs</p>
    <AudioRecorder 
      onRecordingComplete={addAudioElement}
      audioTrackConstraints={{
        noiseSuppression: true,
        echoCancellation: true,
      }} 
      downloadOnSavePress={true}
      downloadFileExtension="webm"
    />
    <hr/>
    <p>Say this: The cat sat on the mat and licked its paw.</p>
    <AudioRecorder 
      onRecordingComplete={addAudioElement}
      audioTrackConstraints={{
        noiseSuppression: true,
        echoCancellation: true,
      }} 
      downloadOnSavePress={true}
      downloadFileExtension="webm"
    />
    <hr/>
    <p>Say this: The leaves rustled in the wind as the storm approached</p>
    <AudioRecorder 
      onRecordingComplete={addAudioElement}
      audioTrackConstraints={{
        noiseSuppression: true,
        echoCancellation: true,
      }} 
      downloadOnSavePress={true}
      downloadFileExtension="webm"
    />
    <hr/>
    <p>Say this: The children laughed and played in the park</p>
    <AudioRecorder 
      onRecordingComplete={addAudioElement}
      audioTrackConstraints={{
        noiseSuppression: true,
        echoCancellation: true,
      }} 
      downloadOnSavePress={true}
      downloadFileExtension="webm"
    />
    <hr/>
    <p>Say this: The waves crashed against the shore, sending spray into the air.</p>
    <AudioRecorder 
      onRecordingComplete={addAudioElement}
      audioTrackConstraints={{
        noiseSuppression: true,
        echoCancellation: true,
      }} 
      downloadOnSavePress={true}
      downloadFileExtension="webm"
    />
    <hr/>
    <p>Say this: The birds sang sweetly in the trees</p>
    <AudioRecorder 
      onRecordingComplete={addAudioElement}
      audioTrackConstraints={{
        noiseSuppression: true,
        echoCancellation: true,
      }} 
      downloadOnSavePress={true}
      downloadFileExtension="webm"
    />
    <hr/>
    
    </div>
    
    </>
    )
}

export default UploadVoice